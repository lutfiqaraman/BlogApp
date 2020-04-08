module.exports = app => {
    const article   = require('../controllers/articles.controller');
    const dashboard = require('../controllers/dashboard.controller');

    app.get("/", (req, res) => {
        res.send('articles backend server ...');
    });

    //Get all articles
    app.get("/articles", article.getAllArticles);

    app.get("/articles/:key", article.getAnArticle);

    app.get("/dashboard/overview", dashboard.getAllArticlesOnDashBoard);
}