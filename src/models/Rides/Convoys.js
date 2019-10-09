/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rides__Convoys', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Repo__Games',
        key: 'id'
      }
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Companies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Accounts',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Repo__Games',
        key: 'id'
      }
    },
    visibility: {
      type: DataTypes.ENUM('private', 'public'),
      allowNull: false,
      defaultValue: 'public'
    },
    departCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departBase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    destCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destBase: {
      type: DataTypes.STRING,
      allowNull: true
    },
    restPlace: {
      type: DataTypes.STRING,
      allowNull: true
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    routeDescription: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    datetimeGathering: {
      type: DataTypes.DATE,
      allowNull: false
    },
    datetimeDeparture: {
      type: DataTypes.DATE,
      allowNull: false
    },
    serverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Repo__TmpServers',
        key: 'id'
      }
    },
    cargoId: {
      // TODO Нужно сделать репозиторий с грузами.
      // Соотвественно type изменится на DataTypes.INTEGER,
      type: DataTypes.STRING,
      allowNull: true
    },
    cargoDescription: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    communication: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    tableName: 'Rides__Convoys'
  });
}