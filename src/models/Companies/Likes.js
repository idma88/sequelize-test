module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Likes', {
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
    comment: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    tableName: 'Companies__Likes'
  });
};
