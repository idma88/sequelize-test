/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies__Social', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    socialNetworkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'REPO__SocialNetworks',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    profileId: {
      type: DataTypes.STRING,
      allowNull: false
    }
    /*
      steam: {
        type: DataTypes.STRING,
        allowNull: true
      },
      discord: {
        type: DataTypes.STRING,
        allowNull: true
      },
      vk: {
        type: DataTypes.STRING,
        allowNull: true
      },
      fb: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ok: {
        type: DataTypes.STRING,
        allowNull: true
      },
      instagram: {
        type: DataTypes.STRING,
        allowNull: true
      },
      youtube: {
        type: DataTypes.STRING,
        allowNull: true
      },
      twitch: {
        type: DataTypes.STRING,
        allowNull: true
      }
    */
  }, {
    tableName: 'Companies__Social'
  });
};
