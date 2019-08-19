'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Emprestimo, {
      as: 'emprestimos',
      foreignKey: 'usuarioId'
    });
  };
  return Usuario;
};