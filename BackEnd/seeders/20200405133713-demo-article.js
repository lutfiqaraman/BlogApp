'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articles', [{
        id: 1,
        title: 'Country Article',
        author: 'Daniel Polo',
        content: 
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' + 
          'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' + 
          'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
          'It has survived not only five centuries, but also the leap into electronic typesetting, ' +
          'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' + 
          'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software ' +
          'like Aldus PageMaker including versions of Lorem Ipsum.',
        description: 'An article about the country',
        key: 'water-article',
        date: new Date(),
        imageUrl: 'https://source.unsplash.com/weekly?country',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('articles', null, {});
  }
};
