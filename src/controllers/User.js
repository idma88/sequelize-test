module.exports = (models) => {
  var modelObj = models.Users.Main;
  
  modelObj.hasOne (models.Users.Location, { as: 'location', targetKey: 'id', foreignKey: 'userId' });
  modelObj.hasOne (models.Users.Social,   { as: 'social',   targetKey: 'id', foreignKey: 'userId' });
  modelObj.hasMany(models.Users.Likes,    { as: 'likes',    targetKey: 'id', foreignKey: 'userId' });
  modelObj.hasMany(models.Users.Games,    { as: 'games',    targetKey: 'id', foreignKey: 'userId' });
  modelObj.hasMany(models.Users.DLC,      { as: 'dlc',      targetKey: 'id', foreignKey: 'userId' });
  modelObj.hasOne (models.Users.Company,  { as: 'company',  targetKey: 'id', foreignKey: 'userId' });
  
  class User {
    static __Include(location, social, likes, games, dlc, company) {
      let include = [];

      if (location) include.push({ model: models.Users.Location,  as: 'location' });
      if (social)   include.push({ model: models.Users.Social,    as: 'social'   });
      if (likes)    include.push({ model: models.Users.Likes,     as: 'likes'    });
      if (games)    include.push({ model: models.Users.Games,     as: 'games'    });
      if (dlc)      include.push({ model: models.Users.DLC,       as: 'dlc'      });
      if (company)  include.push({ model: models.Users.Company,   as: 'company'  });

      return include;
    }


    static async GetById(id, location = false, social = false, likes = false, games = false, dlc = false, company = false) {
      return modelObj.findAll({
        where: { id: id },
        include: __Include(location, social, likes, games, dlc, company)
      })
    }


    /*
    static async New(userId, message) {
      if (userId === undefined) return;
      if ((message === undefined) || (message.length === 0)) return;

      return modelObj.create({
        userId: userId,
        message: message
      });
    };

    static async Get() {
      return modelObj.findAll();
    }

    static async Delete(id) {
      if (id === undefined) return;

      return modelObj.update(
        { deleted: true },
        { where: { id: id } }
      );
    }

    static async UnDelete(id) {
      if (id === undefined) return;

      return modelObj.update(
        { deleted: false },
        { where: { id: id } }
      );
    }
    */
  }

  return User;
}