/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Companies', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tagline: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rules: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'datetime(now, utc)'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'Companies'
  });
};
