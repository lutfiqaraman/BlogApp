'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('article', [{
      id: 1,
        title: 'Country Article',
        author: 'Daniel Polo',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        description: 'An article about the country',
        key: 'water-article',
        date: new Date(),
        imageUrl: 'https://source.unsplash.com/weekly?country'
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('article', null, {});
  }
};
