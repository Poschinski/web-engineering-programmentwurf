const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const session = require("express-session");
const uuid = require("uuid").v4;
const bcrypt = require("bcrypt");
const alert = require("alert");

const { getUsers, writeUsers, getArticles, writeArticles } = require('./data');
//const cookieParser = require("cookie-parser");

const port = 8080;
const app = express();
const encodeUrl = bodyParser.urlencoded({ extended: false });
const store = new session.MemoryStore();

let articles = getArticles();
let users = getUsers();

console.log(getArticles());

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(require("./routes"));
app.use(express.static(__dirname + "/static"));

app.use(
  session({
    name: "session",
    genid: (res, req) => {
      // use UUID as session IDs
      return uuid();
    },
    secret: "KQILLzHjbSCoIV4khe4nlfPkd8LkO13E",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 30, httpOnly: true, secure: false },
  })
);

//app.use(cookieParser());

app.post("/auth", encodeUrl, (req, res) => {
  // Capture the input fields
  let username = req.body.username;
  let password = req.body.password;
  // Ensure the input fields exists and are not empty
  let user = users.find((user) => user.username === username);
  if (user) {
    if (user.password === password) {
      console.log("access granted");
      req.session.user = user;
      req.session.uuid = req.sessionID;
      console.log(req.session);
      res.send(`Hello ${req.session.user.surname}`);
    } else {
      console.log("access denied");
      res.redirect("/login");
    }
  } else {
    console.log("user not found");
    res.redirect("/login");
  }
});

app.post("/newUser", encodeUrl, (req, res) => {
  const username = req.body.username;
  const givenname = req.body.givenname;
  const surname = req.body.surname;
  const password = req.body.password;
  const gender = req.body.gender;

  let user = findByUsername(username);

  if (users[username]) {
    alert("Benutzername schon vergeben");
    // Prüfen ob das wiederholte Passwort übereinstimmt
  } else if (password !== rpassword) {
    alert("Passwörter stimmen nicht überein");
  } else {
    // Passwort wird verschlüsselt und ein neuer user wird in der json angelegt
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, function (err, hash) {
        const newUser = {
          [username]: {
            password: hash,
            givenname: givenname,
            surname: surname,
            gender: gender,
            abo: abo,
          },
        };
        Object.assign(users, newUser);
        const updateUsers = JSON.stringify(users);
        fs.writeFileSync("./users.json", updateUsers, {
          encoding: "utf8",
          flag: "w",
        });
        res.redirect("/home");
      });
    });
  }
});

app.post("/newComment", encodeUrl, (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    let url = req.body.url
    let articleName = url.split("/").pop();
    let comment = req.body.commentInput;
    let timestamp = generateTimestamp();
    let article = articles.find((article) => article.articleName === articleName);
    article.comments.push({
      username: req.session.user.username,
      timestamp: timestamp,
      comment: comment,
    });
    let data = JSON.stringify(articles, null, 2);
    writeArticles(data)
    res.redirect(url);
  } else {
    res.redirect(url)
    alert("Sie müssen angemeldet sein, um einen Kommentar zu schreiben.");
  }
});

app.get("/climbing/article", (req, res) => {
  const comments = articles[0]["comments"];
  res.render("pages/climbing-article", { comments: comments });
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
