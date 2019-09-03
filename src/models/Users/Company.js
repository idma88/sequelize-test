module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Company', {
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
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Companies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    companyPostId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Companies__Posts',
        key: 'id'
      }
      ,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    adminPost: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Users__Company'
  });
};
