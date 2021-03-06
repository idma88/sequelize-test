/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RepoTmpServers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Repo__Games',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Repo__TmpServers'
  });
};
