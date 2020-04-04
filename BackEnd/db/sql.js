require("dotenv").config({ path: "./config/.env" });
const Sequelize = require("sequelize");

const db = process.env.DATABASE;
const username = process.env.DBUSERNAME;
const password = process.env.PASSWORD;

const sequelize = new Sequelize(db, username, password, {
  host    : "localhost",
  dialect : "mysql",
  port    : 3306
});

init = () => {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully");
  }).catch(err => {
    console.error("Connection is die, due to " + err);
  });
};

module.exports.init = init;