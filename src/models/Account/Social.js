/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts__Social', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Accounts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    socialNetworkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Repo__SocialNetworks',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    profileId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Accounts__Social'
  });
};
