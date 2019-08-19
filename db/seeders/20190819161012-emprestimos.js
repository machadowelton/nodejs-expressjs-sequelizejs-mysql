'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Emprestimos', [
      {
        dataHora: '2019-03-01',
        dataDevolucao: '2019-03-05',
        usuarioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dataHora: '2019-03-05',
        dataDevolucao: '2019-03-07',
        usuarioId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Emprestimos', null, {});
  }
};
