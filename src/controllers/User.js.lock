module.exports = (models) => {
  var modelObj = models.Users.Person;

  models.Users.Person.hasOne(
    models.Users.Location,
    {
      onDelete: 'CASCADE',
      foreignKey: 'userId'
    }
  );
  models.Users.Person.hasOne(
    models.Users.Social,
    {
      onDelete: 'CASCADE',
      foreignKey: 'userId'
    }
  );

//   class User {
//     static async New(userId, message) {
//       if (userId === undefined) return;
//       if ((message === undefined) || (message.length === 0)) return;

//       return modelObj.create({
//         userId: userId,
//         message: message
//       });
//     };

//     static async Get() {
//       return modelObj.findAll();
//     }

//     static async Delete(id) {
//       if (id === undefined) return;

//       return modelObj.update(
//         { deleted: true },
//         { where: { id: id } }
//       );
//     }

//     static async UnDelete(id) {
//       if (id === undefined) return;

//       return modelObj.update(
//         { deleted: false },
//         { where: { id: id } }
//       );
//     }
//   }

//   return User;
}