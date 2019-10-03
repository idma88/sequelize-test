/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts__User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // midname: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sex: {
      type: DataTypes.ENUM('male', 'female', 'other'),
      allowNull: true
    },
  }, {
    tableName: 'Accounts__User'
  });
};
