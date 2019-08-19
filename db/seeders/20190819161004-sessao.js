'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sessaos', [
      {
        descricao: 'Quadrihos',
        localizacao: 'Corredor A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Romance',
        localizacao: 'Corredor B',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sessaos', null, {});
  }
};
