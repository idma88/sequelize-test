/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies__DLC', {
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companies',
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
    tableName: 'Companies__DLC'
  });
};
