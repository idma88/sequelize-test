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
  //controllers.Games._GetById(1)
  controllers.Games._GetByTitle('ATS')
    .then (function (res) {
      for (var ind in res)
      {
        var game = res[ind];
        console.log(game.id, game.titleShort, '/', game.titleFull);

        for (var indDlc in game.dlc)
        {
          var dlc = game.dlc[indDlc];
          console.log(dlc.id, dlc.title);
        }
      }
    })
    .catch(function (res) { console.warn(res); })

  // controllers.Games._GetByTitle('ATS')
  //   .then (function (res) { console.log(res); })
  //   .catch(function (res) { console.warn(res); })
}

var qi = sequelize.getQueryInterface();
//console.log('\x1b[41m%s\x1b[0m', 'QueryInterface', qi);

if (0) {
  var tz = require(__dirname + '/tz.js');
  qi.bulkInsert('Timezones', tz)
    .then (function (res) { console.log(res); })
    .catch(function (res) { console.warn(res); })
}

if (0) {
  var games = require(__dirname + '/games.js');
  qi.bulkInsert('Games', games)
    .then (function (res) { console.log(res); })
    .catch(function (res) { console.warn(res); })
}

if (0) {
  var gamesDlc = require(__dirname + '/games__dlc.js');
  qi.bulkInsert('Games__DLC', gamesDlc)
    .then (function (res) { console.log(res); })
    .catch(function (res) { console.warn(res); })
}