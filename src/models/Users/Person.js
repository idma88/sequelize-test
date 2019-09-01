var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelUser extends Sequelize.Model {};

  ModelUser.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    midname: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Users__Persons'
  });

  return ModelUser;
}