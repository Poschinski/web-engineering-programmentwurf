const express = require('express');
const router = express.Router();

const { getUsers, writeUsers, getArticles, writeArticles } = require('./data');

let articles = getArticles();
let users = getUsers();

console.log(articles)

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

function getComments(articleName) {
    let tmpArticle = articles.find((article) => article.articleName === articleName);
    let comments = tmpArticle.commnts
    return comments
}

module.exports = router;