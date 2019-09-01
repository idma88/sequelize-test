/*
var http = require("http");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
*/

var { sequelize, models, controllers } = require(__dirname + '/db');

/*
console.info("[ GlobalChat ]");
// controllers.GlobalChat.New(1, "Hello!")
// controllers.GlobalChat.New(3, "Hi guys! How are you?")
// controllers.GlobalChat.New(2, "Hi! I'm fine!")
// controllers.GlobalChat.Delete(3);

controllers.GlobalChat.Get()
.then(items => {
  console.log("Items:", JSON.stringify(items, null, 4));
});
*/

/*
console.info("[ Timezones ]");
controllers.Timezones.GetById(74)
  .then (function (res) { console.log(res); })
  .catch(function (res) { console.warn(res); })
*/

// return models.Users.Person.create({
//   userId: userId,
//   message: message
// });