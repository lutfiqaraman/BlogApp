"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "articles",
      [
        {
          id: 1,
          title: "Seed Article",
          author: "John Doe",
          content:
            "Database seeding is the initial seeding of a database with data. Seeding a database is a process in which an initial set of data is provided to a database when it is being installed. It is especially useful when we want to populate the database with data we want to develop in future." +
            "This is often an automated process that is executed upon the initial setup of an application. The data can be dummy data or necessary data such as an initial administrator account. ",
          description: "An article about the seed",
          key: "seed-article",
          date: new Date(),
          imageUrl: "https://source.unsplash.com/weekly?seed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("articles", null, {});
  },
};
