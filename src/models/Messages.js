/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Messages', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    recipientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'datetime(now, utc)'
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 'false'
    }
  }, {
    tableName: 'Messages'
  });
};
