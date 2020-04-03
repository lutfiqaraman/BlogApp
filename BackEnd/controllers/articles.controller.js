//Controllers of articles
const fakeArticles = require("../db/fake-articles");

exports.getAllArticles = (req, res) => {
  res.send(fakeArticles);
};

exports.getAnArticle = (req, res) => {
  res.send(fakeArticles.filter((article) => article.key === req.params.key)[0]);
};
