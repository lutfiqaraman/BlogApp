//Controllers of articles
const fakeArticles = require("../db/fake-articles");
const { Article } = require("../db/dbSet");

exports.getAllArticles = (req, res) => {
  Article.findAll().then(articles => res.json(articles));
};

exports.getAnArticle = (req, res) => {
  res.send(fakeArticles.filter((article) => article.key === req.params.key)[0]);
};
