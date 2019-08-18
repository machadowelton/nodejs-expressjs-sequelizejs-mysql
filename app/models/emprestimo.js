'use strict';
module.exports = (sequelize, DataTypes) => {
  const Emprestimo = sequelize.define('Emprestimo', {
    dataHora: DataTypes.DATE,
    dataDevolucao: DataTypes.DATE,
    UsuarioId: DataTypes.INTEGER
  }, {});
  Emprestimo.associate = function(models) {
    Emprestimo.belongsTo(models.Usuario, {
      foreignKey: 'UsuarioId'
    });
  };
  return Emprestimo;
};