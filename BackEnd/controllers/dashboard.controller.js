const db = require("../db/dbSet");

// To Get all the articles form database
exports.getAllArticlesOnDashBoard = async (req, res) => {
  await db.Article.findAll().then((articles) => res.json(articles));
};

// To Get an article by article-id from database
exports.getDashBoardArticleById = async (req, res) => {
  await db.Article.findOne({ where: { id: req.params.id } }).then((article) => {
    res.json(article);
  });
};

// To update an article by id from database
exports.UpdateArticleById = async (req, res) => {
  const id = req.params.id;
  await db.Article.findOne({ where: { id: req.params.id } }).then((article) => {
    article.update({
      title: req.title
    });
    res.json(article);
  });
};