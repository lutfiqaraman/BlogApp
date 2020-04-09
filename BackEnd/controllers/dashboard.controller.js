const db = require("../db/dbSet");

// To Get all the articles form database
exports.getAllArticlesOnDashBoard = async (req, res) => {
  await db.Article.findAll().then((articles) => res.json(articles));
};

exports.getDashBoardArticleById = async (req, res) => {
  await db.Article.findOne({ where: { key: req.params.key } }).then((article) => {
    res.json(article);
  });
};