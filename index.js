const express = require("express");

const port = 8080;
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/registration", (req, res) => {
  res.render("pages/registration")
})

app.post("/auth", (req, res) => {
  // Capture the input fields
  let username = req.body.username;
  let password = req.body.password;
  // Ensure the input fields exists and are not empty
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          req.session.loggedin = true;
          req.session.username = username;
          // Redirect to home page
          res.redirect("/home");
        } else {
          res.send("Incorrect Username and/or Password!");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter Username and Password!");
    res.end();
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});