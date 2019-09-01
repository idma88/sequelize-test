/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies__Partners', {
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companies',
        key: 'id'
      }
    },
    partnerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Companies',
        key: 'id'
      }
    }
  }, {
    tableName: 'Companies__Partners'
  });
};
