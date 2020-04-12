require("dotenv").config({ path: "./config/.env" });

module.exports = {
  "development": {
    "username": process.env.DBUSERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.SERVER,
    "dialect": "mysql",
    "operatorsAliases": "false"
  },
  "test": {
    "username": process.env.DBUSERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.SERVER,
    "dialect": "mysql",
    "operatorsAliases": "false"
  },
  "production": {
    "username": process.env.DBUSERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.SERVER,
    "dialect": "mysql",
    "operatorsAliases": "false"
  }
}
