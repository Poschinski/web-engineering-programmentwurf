const express = require('express');
const session = require('express-session');
const path = require('path');
const alert = require('alert');
const fs = require('fs');
const bcrypt = require('bcrypt');


const app = express();

app.set("view engine", "ejs");

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use('/JS', express.static(path.join(__dirname, 'JS')));
app.use('/Img', express.static(path.join(__dirname, 'Img')));


// http://localhost:3000/
app.get('/newUser', (req, res) => {
    res.render("pages/registration");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML', 'login.html'));
})

// http://localhost:3000/auth
app.post('/', (request, response) => {
    const data = fs.readFileSync('./users.json', {encoding: 'utf8', flag: 'r'});

    const username = request.body.username;
    const password = request.body.password;
    const users = JSON.parse(data);
    let user = users[username];
    if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                // password is valid
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                console.log(err);
                alert("Falscher Benutzername und/oder Password")
            }
        });
    } else {
        alert('Benutzer nicht vorhanden');
    }




});

app.post('/newUser', (req, res) => {
    const data = fs.readFileSync('./users.json', {encoding: 'utf8', flag: 'r'});
    const username = req.body.username;
    const givenname = req.body.givenname;
    const surname = req.body.surname;
    const password = req.body.password;
    const rpassword = password;
    const gender = req.body.gender;
    const abo = 1;
    const users = JSON.parse(data);

    if (users[username]) {
        alert("Benutzername schon vergeben");
    } else if (password !== rpassword) {
        alert("Passwörter stimmen nicht überein");
    } else {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, function (err, hash) {
                const newUser = {[username]: {password:hash, givenname:givenname, surname:surname, gender:gender, abo:abo}};
                Object.assign(users, newUser);
                const updateUsers = JSON.stringify(users);
                fs.writeFileSync('./users.json', updateUsers, {encoding: 'utf8', flag: 'w'});
                res.redirect('/home');
            })
        })
    }
})


//localhost:3000/home
app.get('/home', function (request, response) {
    // If the user is loggedin
    if (request.session.loggedin) {
        // Output username
        response.send('Wilkommen zurück, ' + request.session.username + '!');
    } else {
        // Not logged in
        response.send('Bitte anmelden um diese Seite zu sehen!');
    }
    response.end();
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
});

