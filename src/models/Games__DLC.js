/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Games__DLC', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Games',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Games__DLC'
  });
};
