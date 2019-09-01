const Sequelize = require('sequelize');
const Op = require('sequelize').Op;

module.exports = (models) => {
  var modelObj = models.Games;

  models.Games.hasOne(models.Games__DLC);

  class Games {
    static async GetById(id) {
      return modelObj.findOne({
        where: { id: id },
        include: [{
          model: models.Games__DLC,
          where: { id: Sequelize.col('Games__DLC.id') }
        }]
      })
    }

    static async GetByTitle(title) {
      return modelObj.findAll({
        where: {
          [Op.or]: [{titleShort: title}, {titleFull: title}]
        }
      });
    }

  }

  return Games;
}
