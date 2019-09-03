module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Games', {
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
    gameId: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'Games',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  }, {
    tableName: 'Companies__Games'
  });
};
