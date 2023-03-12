const fs = require("fs");

/**
 * 
 * @returns all users stored in the json
 */
function getUsers() {
    let usersData = JSON.parse(fs.readFileSync("data/users.json", "utf8"));
    let users = usersData["users"];
    return users
}

/**
 * 
 * @param data - all the data that should be saved into the users array
 */
function writeUsers(data) {
    let usersData = JSON.parse(fs.readFileSync("data/users.json", "utf8"));
    usersData["users"] = data;
    tmpData = JSON.stringify(usersData, null, 2);
    fs.writeFileSync("data/users.json", tmpData, {
        encoding: "utf8",
        flag: "w",
    });
}

/**
 * 
 * @returns all articles stored in the json
 */
function getArticles() {
    let articlesData = JSON.parse(fs.readFileSync("data/articles.json", "utf8"));
    let articles = articlesData["articles"];
    return articles
}

/**
 * 
 * @param data - all the data that should be saved into the articles array
 */
function writeArticles(data){
    let articlesData = JSON.parse(fs.readFileSync("data/articles.json", "utf8"));
    articlesData["articles"] = data;
    tmpData = JSON.stringify(articlesData, null, 2);
    fs.writeFileSync("data/articles.json", tmpData, {
        encoding: "utf8",
        flag: "w",
    });
}

module.exports = { getUsers, writeUsers, getArticles, writeArticles };