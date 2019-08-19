'use strict';
module.exports = (sequelize, DataTypes) => {
  const Livro = sequelize.define('Livro', {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    sessaoId: DataTypes.INTEGER
  }, {});
  Livro.associate = function(models) {
    Livro.belongsTo(models.Sessao, {
      as: 'sessao'
    });
    Livro.belongsToMany(models.Emprestimo, {
      through: 'EmprestimoLivros',
      foreignKey: 'livroId',
      as: 'emprestimo'
    });
  };
  return Livro;
};