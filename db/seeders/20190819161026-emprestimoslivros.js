'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EmprestimoLivros', [
      {
        emprestimoId: 1,
        livroId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        emprestimoId: 2,
        livroId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EmprestimoLivros', null, {});
  }
};
