'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sessao = sequelize.define('Sessao', {
    descricao: DataTypes.TEXT,
    localizacao: DataTypes.STRING
  }, {});
  Sessao.associate = function(models) {
    Sessao.hasMany(models.Livro, {
      as: 'livros',
      foreignKey:'sessaoId'
    });
  };
  return Sessao;
};