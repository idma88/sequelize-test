var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelSocial extends Sequelize.Model {};

  ModelSocial.init({
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   unique: true,
    //   allowNull: false,
    //   autoIncrement: true
    // },
    truckersmp: {
      type: DataTypes.INTEGER,
    },
    steam: {
      type: DataTypes.INTEGER,
    },
    wotr: {
      type: DataTypes.INTEGER,
    },
    vk: {
      type: DataTypes.STRING,
    },
    fb: {
      type: DataTypes.STRING,
    },
    ok: {
      type: DataTypes.STRING,
    },
    discord: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Users__Social' 
  });

  return ModelSocial;
}