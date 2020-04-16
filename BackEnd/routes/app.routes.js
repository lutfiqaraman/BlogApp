const isUserAuthenticated = require("../authorization/auth");

module.exports = app => {
  const user = require("../controllers/users.controller");
  const article = require("../controllers/articles.controller");
  const dashboard = require("../controllers/dashboard.controller");

  app.get("/", (req, res) => {
    res.send('articles backend server ...');
  });

  // Users - register a user
  app.post("/user/register", user.registerUser);

  // Users - login
  app.post("/user/login", user.loginUser);

  // Userss - Valid User
  app.post("/user/auth", user.validUser);

  // Articles - Get all articles
  app.get("/articles", article.getAllArticles);

  // Articles - Get an articl
  app.get("/articles/:id", article.getAnArticle);

  // Dashboard - Get all articles in Dashboard
  app.get("/dashboard/overview", isUserAuthenticated, dashboard.getAllArticlesOnDashBoard);

  // Dashboard - Edit an article
  app.get("/dashboard/article/:id", isUserAuthenticated, dashboard.getDashBoardArticleById);

  // Dashboard - Preview an article
  app.get("/dashboard/preview/:id", dashboard.getDashBoardArticleById);

  // Dashboard - Update an article
  app.put("/dashboard/:id", isUserAuthenticated, dashboard.updateArticleById);

  // Dashboard - Delete an article
  app.delete("/dashboard/article/:id", isUserAuthenticated, dashboard.deleteArticleById);

  // Dashboard - Create an article
  app.post("/dashboard/article", isUserAuthenticated, dashboard.createAnArticle);  
}