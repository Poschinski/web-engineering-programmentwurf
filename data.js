const fs = require("fs");

function getUsers() {
    let usersData = JSON.parse(fs.readFileSync("data/users.json", "utf8"));
    let users = usersData["users"];
    return users
}

function writeUsers(data) {
    fs.writeFileSync("users.json", data, {
        encoding: "utf8",
        flag: "w",
    });
}

function getArticles() {
    let articlesData = JSON.parse(fs.readFileSync("data/articles.json", "utf8"));
    let articles = articlesData["articles"];
    return articles
}

function writeArticles(data){
    let articlesData = JSON.parse(fs.readFileSync("data/articles.json", "utf8"));
    articlesData["articles"] = data
    tmpData = JSON.stringify(articlesData, null, 2)
    fs.writeFileSync("data/articles.json", tmpData, {
        encoding: "utf8",
        flag: "w",
    });
}

module.exports = { getUsers, writeUsers, getArticles, writeArticles };