require("dotenv").config({ path: "./config/.env" });

const tableName = 'article';

module.exports = (sequalize, type) => {
  return sequalize.define(tableName, {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: type.STRING,
    },
    author: {
      type: type.STRING,
    },
    content: {
      type: type.TEXT,
    },
    description: {
      type: type.TEXT,
    },
    key: {
      type: type.STRING,
    },
    date: {
      type: type.DATE,
    },
    imageUrl: {
      type: type.STRING,
    },
  });
};
