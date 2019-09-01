/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies__Games', {
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companies',
        key: 'id'
      }
    },
    gameId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'Games',
        key: 'id'
      }
    }
  }, {
    tableName: 'Companies__Games'
  });
};
