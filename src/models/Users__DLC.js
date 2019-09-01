/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users__DLC', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    dlcId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Games__DLC',
        key: 'id'
      }
    }
  }, {
    tableName: 'Users__DLC'
  });
};
