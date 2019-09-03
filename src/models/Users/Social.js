module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Social', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    truckersmpId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wotrId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    steamId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uplay: {
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
  }, {
    tableName: 'Users__Social'
  });
};
