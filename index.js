const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const session = require("express-session");
const uuid = require("uuid").v4;
const cookieParser = require("cookie-parser");

const port = 8080;
const app = express();
const encodeUrl = bodyParser.urlencoded({ extended: false });

let usersData = JSON.parse(fs.readFileSync('users.json', 'utf8'));
let users = usersData["users"];
let articlesData = JSON.parse(fs.readFileSync("articles.json", "utf8"));
let articles = articlesData["articles"];

console.log(users)

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));

app.use(session({
  name: "session",
  genid: (res, req) => {
    // use UUID as session IDs
    return uuid();
  },
  secret: "KQILLzHjbSCoIV4khe4nlfPkd8LkO13E",
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 30, httpOnly: true, secure: false}
}))

app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/registration", (req, res) => {
  res.render("pages/registration");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
})

app.post("/auth", encodeUrl,(req, res) => {
  // Capture the input fields
  let username = req.body.username;
  let password = req.body.password;
  // Ensure the input fields exists and are not empty
  let user = users.find((user) => user.username === username);
  if (user) {
    if (user.password === password) {
      console.log("access granted");
      req.session.user=user;
      req.session.uuid=req.sessionID
      console.log(req.session)
      res.send(`Hello ${req.session.user.surname}`)
    } else {
      console.log("access denied");
      res.redirect("/login");
    }
  } else {
    console.log("user not found")
    res.redirect("/login")
  }
});

app.post("/newUser", encodeUrl, (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const givenname = req.body.givenname;
  const surname = req.body.surname;
  const password = req.body.password;
  const gender = req.body.gender;

  let user = findByUsername(username);

  if (user) {
    res.send(
      `<p>Benutzername bereits vergeben. Gehen Sie zurück und wählen Sie einen anderen Benutzernamen.</p>`
    );
  } else {
    // push new user to userData Array
    users.push({
      username: username,
      givenname: givenname,
      surname: surname,
      password: password,
      gender: gender,
    });

    let anrede;
    if (gender == "male") {
      anrede = "Herr";
    } else {
      anrede = "Frau";
    }
    // format and save the new user to json
    let data = JSON.stringify(userData, null, 2);
    fs.writeFileSync("users.json", data);
    // redirect to the homepage
    res.send(`<p>Herzlichen Glückwunsch ${anrede} ${givenname} ${surname}. Sie haben sich erfolgreich registriert.<br>
    Sie können Sich nun <a href="/">hier</a> mit Ihren Benutzerdaten anmelden.`);
  }
  res.redirect("/")
});

app.post("/newComment", encodeUrl, (req, res) => {
  console.log(req.session.user);
  const comment = req.body.commentInput;
  const timestamp = generateTimestamp();
  articles[0]["comments"].push({
    username: req.session.user.username,
    timestamp: timestamp,
    comment: comment,
  })
  const comments = articles["articles"][0]["comments"]
  let data = JSON.stringify(articles, null, 2);
  fs.writeFileSync("comments.json", data)
  res.redirect("/climbing/article")
})

app.get("/climbing", (req, res) => {
  console.log(req.session.user);
  res.render("pages/climbing-overview");
})

app.get("/climbing/article", (req, res) => {
  const comments = articles[0]["comments"];
  res.render("pages/climbing-article", {comments: comments});
})

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
  console.log(`Example app listening on port ${port}`);
});
