// Controllers of articles
const db = require("../db/dbSet");

// To Get all the articles form database
exports.getAllArticles = async (req, res) => {
  await db.Article.findAll().then((articles) => res.json(articles));
};

// To get an article by an article's id from database
exports.getAnArticle = async (req, res) => {
  const id = req.params.id;
  await db.Article.findOne({ where: { id } }).then((article) => {
    res.json(article);
  });
};
