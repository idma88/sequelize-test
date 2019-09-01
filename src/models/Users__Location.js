/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users__Location', {
    userId: {
      type: "",
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timezoneId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Timezones',
        key: 'id'
      }
    },
    daylight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Users__Location'
  });
};
