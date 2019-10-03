/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Repo__Games', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titleShort: {
      type: DataTypes.STRING,
      allowNull: true
    },
    titleFull: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Repo__Games'
  });
};
