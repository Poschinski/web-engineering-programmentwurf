var express = require('express');
var router = express.Router();


const comments = [{
    "username": "username",
    "timestamp": "15.02.2023 16:53",
    "comment": "Dieser Artikel hat mein Leben verändert."
  },
  {
    "username": "tempUser",
    "timestamp": "Donnerstag, 9. März 2023, 11:31",
    "comment": "Diese Kommentarfunktion ist der shit."
}]


router.get('/bodybuilding/grundlagen', (req, res) => {
    res.render("pages/bodybuilding-gr");
})

router.get('/bodybuilding/entspannung', (req, res) => {
    res.render("pages/bodybuilding-ent", { comments: comments });
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


module.exports = router;