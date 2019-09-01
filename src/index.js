var { sequelize, models, controllers } = require(__dirname + '/db');

if (0) {
  // console.info("[ GlobalChat ]");
  // // controllers.GlobalChat.New(1, "Hello!")
  // // controllers.GlobalChat.New(3, "Hi guys! How are you?")
  // // controllers.GlobalChat.New(2, "Hi! I'm fine!")
  // // controllers.GlobalChat.Delete(3);

  // controllers.GlobalChat.Get()
  // .then(items => {
  //   console.log("Items:", JSON.stringify(items, null, 4));
  // });
}

if (0) {
  console.info("[ Timezones ]");
  controllers.Timezones.GetById(74)
    .then (function (res) { console.log(res); })
    .catch(function (res) { console.warn(res); })
}

if (1) {
  console.info("[ Games ]");
  controllers.Games.GetById(1)
    .then (function (res) { console.log(res); })
    .catch(function (res) { console.warn(res); })

  // controllers.Games.GetByTitle('ATS')
  //   .then (function (res) { console.log(res); })
  //   .catch(function (res) { console.warn(res); })
}

if (0) {
// return models.Users.Person.create({
//   userId: userId,
//   message: message
// });
}