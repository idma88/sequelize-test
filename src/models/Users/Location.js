var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelLocation extends Sequelize.Model {};

  ModelLocation.init({
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   unique: true,
    //   allowNull: false,
    //   autoIncrement: true
    // },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timezoneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    daylight: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Users__Location' 
  });

  return ModelLocation;
}