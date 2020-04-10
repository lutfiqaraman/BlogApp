const db = require("../db/dbSet");

// To get all the articles form database
exports.getAllArticlesOnDashBoard = async (req, res) => {
  await db.Article.findAll().then((articles) => res.json(articles));
};

// To get an article by an article's id from database
exports.getDashBoardArticleById = async (req, res) => {
  const id = req.params.id;
  await db.Article.findOne({ where: { id } }).then((article) => {
    res.json(article);
  });
};

// To update an article by an article's id from database
exports.UpdateArticleById = async (req, res) => {
  const id = req.params.id;
  await db.Article.update({
    title: req.body.title
  }, {
    returning: true,
    where: { id }
  });
};