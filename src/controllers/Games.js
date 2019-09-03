const Op = require('sequelize').Op;

module.exports = (models) => {
  var modelObj = models.Games.Games;

  modelObj.hasMany(models.Games.DLC, { as: 'dlc', targetKey: 'id', foreignKey: 'gameId' });

  class Games {
    static __Include(use) {
      if (use) {
        return [{ model: models.Games.DLC, as: 'dlc' }]
      } else {
        return [];
      }
    }

    //= [C]reate
    static async AddGame(titleShort, titleFull){
        return modelObj.create({
          titleShort: titleShort,
          titleFull:  titleFull
        });
    }

    static async AddDLC(gameId, title){
      return models.Games.DLC.create({
        gameId: gameId,
        title:  title
      });
    }

    //= [R]ead
    static async GetGame(condition, dlc = false) {
      let where;

      if (typeof condition == "number") {
        where = {  id: condition };
      } else {
        where = { [Op.or]: [{titleShort: condition}, {titleFull: condition}] };
      }

      return modelObj.findAll({
        where: where,
        include: __Include(dlc)
      })
    }

    static async _GetById(id, dlc = false) {
      return modelObj.findAll({
        where: { id: id },
        include: __Include(dlc)
      })
    }

    static async _GetByTitle(title, dlc = false) {
      return modelObj.findAll({
        where: {
          [Op.or]: [{titleShort: title}, {titleFull: title}]
        },
        include: __Include(dlc)
      });
    }
       
    //= [U]pdate
    //! Not supported
    
    //= [D]elete
    //! Not supported

  }

  return Games;
}
