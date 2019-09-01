/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users__Company', {
    userId: {
      type: "",
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Companies',
        key: 'id'
      }
    },
    companyPostId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Companies__Posts',
        key: 'id'
      }
    },
    adminPost: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Users__Company'
  });
};
