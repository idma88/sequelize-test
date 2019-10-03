/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registeredDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    activatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deletedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    activationToken: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Accounts'
  });
};
