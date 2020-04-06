"use strict";
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "Article",
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      content: DataTypes.TEXT,
      description: DataTypes.TEXT,
      key: DataTypes.STRING,
      date: DataTypes.DATE,
      imageUrl: DataTypes.STRING,
    },
    {}
  );
  Article.associate = function (models) {
    // associations can be defined here
  };
  return Article;
};
