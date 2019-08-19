'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'Mário Julio Ribeiro',
        email: 'mariojulioribeiro@email.com',
        telefone: '(96) 99153-8556',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Isis Rafaela Teixeira',
        email: 'isisrafaelateixeira-71@email.com',
        telefone: '(84) 98197-3449',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
