var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelTimezones extends Sequelize.Model {};

  ModelTimezones.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    offset: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Timezones' 
  });

  return ModelTimezones;
}