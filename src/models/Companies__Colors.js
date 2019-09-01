/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies__Colors', {
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companies',
        key: 'id'
      }
    },
    color: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'Companies__Colors'
  });
};
