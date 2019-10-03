/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accounts__Privacy', {
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
    birthdayLevel: {
      type: DataTypes.ENUM('hideAll', 'hideYear', 'showAgeOnly', 'showAll'),
      allowNull: false,
      defaultValue: 'showAll'
    },
  }, {
    tableName: 'Accounts__Privacy'
  });
};
