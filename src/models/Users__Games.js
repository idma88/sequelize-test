/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users__Games', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'Users__Games'
  });
};
