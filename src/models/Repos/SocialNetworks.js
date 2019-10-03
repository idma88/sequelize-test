/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RepoSocialNetworks', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Repo__SocialNetworks'
  });
};
