/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies__News__Comments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    newsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companies__News',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    authorId: {
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
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Companies__News__Comments'
  });
};
