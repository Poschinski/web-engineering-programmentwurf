const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");
const alert = require("alert");

const { getUsers, writeUsers, getArticles, writeArticles } = require("./data");

const port = 8080;
const app = express();
const encodeUrl = bodyParser.urlencoded({ extended: false });
const fileStoreOptions = {
  path: "./sessions",
  retries: 3,
};

let users = getUsers();

app.use(
  session({
    store: new FileStore(fileStoreOptions),
    name: "session",
    genid: (res, req) => {
      // use UUID as session IDs
      return uuid();
    },
    secret: "KQILLzHjbSCoIV4khe4nlfPkd8LkO13E",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 120, httpOnly: true, secure: false },
  })
);

app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.authenticated = true;
  } else {
    res.locals.authenticated = false;
  }
  next();
});

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(require("./routes"));
app.use(express.static(__dirname + "/static"));

app.post("/auth", encodeUrl, (req, res) => {
  // Capture the input fields
  let username = req.body.username;
  let password = req.body.password;
  // Ensure the input fields exists and are not empty
  let user = users.find((user) => user.username === username);
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        req.session.user = user;
        req.session.uuid = req.sessionID;
        console.log(req.session);
        res.redirect("/");
      } else {
        alert("Falsches Passwort!")
        res.redirect("/login");
      }
    });
  } else {
    alert("Falscher Benutzername!")
    res.redirect("/login");
  }
});

app.post("/newUser", encodeUrl, (req, res) => {
  const username = req.body.username;
  const givenname = req.body.givenname;
  const surname = req.body.surname;
  const password = req.body.password;
  const rpassword = req.body.passwordConfirm;
  const gender = req.body.gender;

  // prüfe, ob der Benuter bereits existiert
  let user = findByUsername(username);
  if (user) {
    alert("Benutzername bereits vergeben!");
    // Prüfen ob das wiederholte Passwort übereinstimmt
  } else if (password !== rpassword) {
    alert("Passwörter stimmen nicht überein");
  } else {
    // Passwort wird verschlüsselt und ein neuer user wird in der json angelegt
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, function (err, hash) {
        const newUser = {
          username: username,
          givenname: givenname,
          surname: surname,
          password: hash,
          gender: gender,
        };
        users.push(newUser);
        writeUsers(users);
        res.redirect("/");
      });
    });
  }
});

app.post("/newComment", encodeUrl, (req, res) => {
  let articles = getArticles();
  let url = req.body.url;
  if (req.session.user) {
    let articleName = url.split("/").pop();
    let comment = req.body.commentInput;
    let timestamp = generateTimestamp();
    let article = articles.find(
      (article) => article.articleName === articleName
    );
    article.comments.unshift({
      username: req.session.user.username,
      timestamp: timestamp,
      comment: comment,
    });
    writeArticles(articles);
    res.redirect(url);
  } else {
    res.redirect(url);
    alert("Sie müssen angemeldet sein, um einen Kommentar zu schreiben.");
  }
});

app.get("/logout", (req, res) => {
  if (req.session) {
    res.status(200).clearCookie("session");
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("Fehler beim abmelden.");
      } else {
        res.redirect("/");
      }
    });
  } else {
    res.end();
  }
});

function findByUsername(username) {
  let user = users.find((user) => user.username === username);
  return user;
}

function generateTimestamp() {
  let date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleTimeString("de-de", options);
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
