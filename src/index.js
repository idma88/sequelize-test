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

var { sequelize, models } = require(__dirname + '/db');

var GlobalChat = require(__dirname + '/controllers/globalChat')(models.globalChat);

// GlobalChat.NewMessage(3, "Fine!")
// GlobalChat.Delete(3);

GlobalChat.Get()
.then(items => {
  console.log("Items:", JSON.stringify(items, null, 4));
});
