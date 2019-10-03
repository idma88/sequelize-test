module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Repo__DLC', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Repo__Games',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Repo__DLC'
  });
};
