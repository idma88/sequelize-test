module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DLC', {
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
    dlcId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Games__DLC',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    tableName: 'Users__DLC'
  });
};
