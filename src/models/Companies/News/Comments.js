module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comments', {
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
      allowNull: true,
      references: {
        model: 'Accounts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    comment: {
      type: DataTypes.STRING(2000),
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
