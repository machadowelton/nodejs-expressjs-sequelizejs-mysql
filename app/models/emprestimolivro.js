'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmprestimoLivro = sequelize.define('EmprestimoLivro', {
    emprestimoId: DataTypes.INTEGER,
    livroId: DataTypes.INTEGER
  }, {});
  EmprestimoLivro.associate = function(models) {
    EmprestimoLivro.belongsTo(models.Emprestimo, {
      foreignKey: 'emprestimoId'      
    });
    EmprestimoLivro.belongsTo(models.Livro, {
      foreignKey: 'livroId'
    });
  };
  return EmprestimoLivro;
};