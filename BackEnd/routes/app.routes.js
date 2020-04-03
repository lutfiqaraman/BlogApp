module.exports = app => {
    const article = require('../controllers/articles.controller');

    app.get("/", (req, res) => {
        res.send('articles backend server ...');
    });

    //Get all articles
    app.get("/articles", article.getAllArticles);

    app.get("/articles/:key", article.getAnArticle);
}