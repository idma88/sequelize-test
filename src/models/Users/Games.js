module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Games', {
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
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Games',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    tableName: 'Users__Games'
  });
};
