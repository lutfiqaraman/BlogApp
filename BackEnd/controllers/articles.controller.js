//Controllers of articles
const fakeArticles = require("../db/fake-articles");
const { Article } = require("../db/dbSet");

//To Get all the articles form database
exports.getAllArticles = (req, res) => {
  Article.findAll().then((articles) => res.json(articles));
};

//To Get a single article filtered by the article key
exports.getAnArticle = (req, res) => {
  res.send(fakeArticles.filter((article) => article.key === req.params.key)[0]);
};
