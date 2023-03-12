const express = require('express');
const router = express.Router();

const { getUsers, writeUsers, getArticles, writeArticles } = require('./data');

let users = getUsers();

router.get('/bodybuilding/:name(entspannung|grundlagen|protein)', (req, res) => {
    let name = req.params.name
    let comments = getComments(name)
    res.render("pages/bodybuilding/" + name, { comments: comments });
})

router.get("/registration", (req, res) => {
    res.render("pages/registration");
  });
  
router.get("/login", (req, res) => {
    res.render("pages/login");
});

// http:localhost:3000/klettern
router.get('/klettern', (req, res) => {
    res.render("pages/climbing-overview");
})

// http://localhost:3000/
router.get('/', (req, res) => {
    res.render("pages/Startseite");
})
router.get('/quiz', (req, res) => {
    res.render("pages/quiz");
})
router.get('/skifahren', (req, res) => {
    res.render("pages/ski-overview");
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