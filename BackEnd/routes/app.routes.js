module.exports = app => {
    const article   = require('../controllers/articles.controller');
    const dashboard = require('../controllers/dashboard.controller');

    app.get("/", (req, res) => {
        res.send('articles backend server ...');
    });

    // Get all articles
    app.get("/articles", article.getAllArticles);
    app.get("/articles/:id", article.getAnArticle);

    // Get all articles in Dashboard
    app.get("/dashboard/overview", dashboard.getAllArticlesOnDashBoard);

    // Edit an article
    app.get("/dashboard/article/:id", dashboard.getDashBoardArticleById);

    // Update an article
    app.put("/dashboard/:id", dashboard.UpdateArticleById);
    
}