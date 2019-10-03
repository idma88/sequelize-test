/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts__Auth', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Accounts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Accounts__Auth'
  });
};
