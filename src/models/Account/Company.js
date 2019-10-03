/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts__Company', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Accounts',
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
    tableName: 'Accounts__Company'
  });
};
