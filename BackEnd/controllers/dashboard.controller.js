const db = require("../db/dbSet");

// To create an article
exports.createAnArticle = async (req, res) => {
  await db.Article.create({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    description: req.body.description,
    key: req.body.key,
    date: req.body.date,
    imageUrl: req.body.imageUrl,
  }).then((result) => res.json(result));
};

// To get all the articles form database
exports.getAllArticlesOnDashBoard = async (req, res) => {
  await db.Article.findAll().then((result) => res.json(result));
};

// To get an article by an article's id from database
exports.getDashBoardArticleById = async (req, res) => {
  const id = req.params.id;
  await db.Article.findOne({ where: { id } }).then((result) => {
    res.json(result);
  });
};

// To update an article by an article's id from database
exports.updateArticleById = async (req, res) => {
  const id = req.params.id;
  await db.Article.update(
    {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      description: req.body.description,
      key: req.body.key,
      date: req.body.date,
      imageUrl: req.body.imageUrl,
    },
    {
      returning: true,
      where: { id },
    }
  );
};

// To delete an article by an article's id from database
exports.deleteArticleById = async (req, res) => {
  const id = req.params.id;
  if (db.Article != null) {
    await db.Article.destroy({
      where: { id },
      force: true,
    });
  } else {
    res.status(400).send({ message: "Article could not be deleted" });
  }
};
