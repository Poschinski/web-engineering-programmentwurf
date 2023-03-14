const express = require('express');
const router = express.Router();

const { getUsers, writeUsers, getArticles, writeArticles } = require('./data');

let users = getUsers();
// http://localhost:3000/Artikel-Bodybuilding
router.get('/bodybuilding/:name(entspannung|grundlagen|protein)', (req, res) => {
    let name = req.params.name
    let comments = getComments(name)
    res.render("pages/bodybuilding/" + name, { comments: comments });
})
// http://localhost:3000/Artikel-Klettern
router.get('/klettern/:name(einfuehrung|klettergebiete|varianten)', (req, res) => {
    let name = req.params.name
    let comments = getComments(name)
    res.render("pages/klettern/" + name, { comments: comments });
})
// http://localhost:3000/Artikel-Skisport
router.get('/skifahren/:name(history|olympia|worldcup)', (req, res) => {
    let name = req.params.name
    let comments = getComments(name)
    res.render("pages/skifahren/" + name, { comments: comments });
})
// http://localhost:3000/registrierungsseite
router.get("/registration", (req, res) => {
    res.render("pages/registration");
  });
// http://localhost:3000/loginseite
router.get("/login", (req, res) => {
    res.render("pages/login");
});

// http:localhost:3000/klettern
router.get('/klettern', (req, res) => {
    res.render("pages/climbing-overview");
})

// http://localhost:3000/startseite
router.get('/', (req, res) => {
    res.render("pages/startseite");
})
// http://localhost:3000/quiz
router.get('/quiz', (req, res) => {
    res.render("pages/quiz");
})
// http:localhost:3000/skifahren
router.get('/skifahren', (req, res) => {
    res.render("pages/ski-overview");
})
// http:localhost:3000/bodybuilding
router.get('/bodybuilding/', (req, res) => {
    res.render("pages/bodybuilding-overview");
})

/**
 * 
 * @param articleName - name of the article 
 * @returns all comments saved in the particular article
 */
function getComments(articleName) {
    let articles = getArticles();
    let tmpArticle = articles.find((article) => article.articleName === articleName);
    let comments = tmpArticle.comments
    return comments
}

module.exports = router;