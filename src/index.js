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

var Sequelize = require('sequelize');
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'vtc-hub.sqlite',
  define: {
    timestamps: false,
    freezeTableName: false
  }
});
const GlobalChat = sequelize.import(__dirname + "/models/global-chat")

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync()
    // .then(result => console.log(result))
    // .catch(err => console.log(err));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
