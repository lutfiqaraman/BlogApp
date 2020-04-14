module.exports = app => {
  const user = require('../controllers/users.controller');
  const article = require('../controllers/articles.controller');
  const dashboard = require('../controllers/dashboard.controller');

  app.get("/", (req, res) => {
    res.send('articles backend server ...');
  });

  // Users - register a user
  app.post("/user/register", user.registerUser);

  // Users - login
  app.post("/user/login", user.loginUser);

  // Articles - Get all articles
  app.get("/articles", article.getAllArticles);

  // Articles - Get an articl
  app.get("/articles/:id", article.getAnArticle);

  // Dashboard - Get all articles in Dashboard
  app.get("/dashboard/overview", dashboard.getAllArticlesOnDashBoard);

  // Dashboard - Edit an article
  app.get("/dashboard/article/:id", dashboard.getDashBoardArticleById);

  // Dashboard - Preview an article
  app.get("/dashboard/preview/:id", dashboard.getDashBoardArticleById);

  // Dashboard - Update an article
  app.put("/dashboard/:id", dashboard.updateArticleById);

  // Dashboard - Delete an article
  app.delete("/dashboard/article/:id", dashboard.deleteArticleById);

  // Dashboard - Create an article
  app.post("/dashboard/article", dashboard.createAnArticle);  
}