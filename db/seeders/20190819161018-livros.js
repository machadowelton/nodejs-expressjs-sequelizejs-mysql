'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Livros', [
      {
        titulo: 'Vingadores - Guerra Infinita',
        autor: 'Stan Lee',
        sessaoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Vingadores - A Era de Ultron',
        autor: 'Stan Lee',
        sessaoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Liga da Justiça',
        autor: 'Gardner Fox',
        sessaoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Querido John',
        autor: 'Nicholas Sparks',
        sessaoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'A Culpa É das Estrelas',
        autor: 'John Green',
        sessaoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Livros', null, {});
  }
};
