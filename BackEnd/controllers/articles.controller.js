//Controllers of articles
const fakeArticles = require("../db/fake-articles");
const db = require("../db/dbSet");

//To Get all the articles form database
exports.getAllArticles = async (req, res) => {
  await db.Article.findAll().then((articles) => res.json(articles));
};

//To Get a single article filtered by the article key
exports.getAnArticle = async (req, res) => {
  await db.Article.findOne({ where: { key: req.params.key } }).then((article) => {
    res.json(article);
  });
};
