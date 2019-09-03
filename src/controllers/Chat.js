module.exports = (models) => {
  const DEFAULT_LAST_MESSAGES_COUNT = 50;

  var modelObj = models.Chat;

  class Chat {
    static async New(userId, message) {
      if (userId === undefined) return;
      if ((message === undefined) || (message.length === 0)) return;

      return modelObj.create({
        userId: userId,
        message: message
      });
    };

    static async Get(count = DEFAULT_LAST_MESSAGES_COUNT) {
      return modelObj.findAll({
        limit: count
      });
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
  }

  return Chat;
}
