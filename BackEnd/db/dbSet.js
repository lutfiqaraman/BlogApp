require("dotenv").config({ path: "./config/.env" });
const ArticleModel = require('../models/article.model');

const Sequelize = require("sequelize");
const db = process.env.DATABASE;
const username = process.env.DBUSERNAME;
const password = process.env.PASSWORD;

sequelize = new Sequelize(db, username, password, {
  host    : "localhost",
  dialect : "mysql",
  port    : 3306
});

sequelize
  .sync()
  .then(() => { console.log('Database & tables have been created!') });

const Article = ArticleModel(sequelize, Sequelize);
module.exports = { Article };
