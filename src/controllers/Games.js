const Sequelize = require('sequelize');
const Op = require('sequelize').Op;

module.exports = (models) => {
  var modelObj = models.Repos.Games;

  modelObj.hasMany(models.Repos.DLC, {
    foreignKey: 'gameId',
    targetKey: 'id',
    as: 'dlc'
  });

  class Games {
    static async GetById(id) {
      return modelObj.findAll({
        where: { id: id },
        include: [{
          model: models.Repos.DLC,
          as: 'dlc'
        }]
      })
    }

    static async GetByTitle(title) {
      return modelObj.findAll({
        where: {
          [Op.or]: [{titleShort: title}, {titleFull: title}]
        },
        include: [{
          model: models.Repos.DLC,
          as: 'dlc'
        }]
      });
    }

  }

  return Games;
}
