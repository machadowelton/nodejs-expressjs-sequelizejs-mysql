'use strict';
module.exports = (sequelize, DataTypes) => {
  const Emprestimo = sequelize.define('Emprestimo', {
    dataHora: DataTypes.DATE,
    dataDevolucao: DataTypes.DATE,
    usuarioId: DataTypes.INTEGER
  }, {});
  Emprestimo.associate = function(models) {
    Emprestimo.belongsTo(models.Usuario, {
      as: 'usuario'
    });
    Emprestimo.belongsToMany(models.Livro, {
      through: 'EmprestimoLivros',
      foreignKey: 'emprestimoId',
      as: 'livros'
    });
  };
  return Emprestimo;
};