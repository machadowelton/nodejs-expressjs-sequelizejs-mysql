'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmprestimoLivros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emprestimoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Emprestimos',
          key: 'id'
        }
      },
      livroId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Livros',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmprestimoLivros');
  }
};