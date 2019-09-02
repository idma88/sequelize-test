/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Chat', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
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
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Chat'
  });
};
