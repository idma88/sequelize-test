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
var models = require('sequelize-auto-import')(sequelize, __dirname + '/models');

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

/*
  // Create
  models.globalChat.create({
    userId: 1,
    message: "Hello everyone!"
  }).then(obj => {
    console.log(obj);
  })

  models.globalChat.create({
    userId: 2,
    message: "Hi! How are you?"
  }).then(obj => {
    console.log(obj);
  })
*/
/*
  // Update
  models.globalChat.update({ deleted: true }, {
    where: {
      id: 2
    }
  }).then(() => {
    console.log("Done");
  });
*/

  // Get
  models.globalChat.findAll({
    where: { deleted: false }
  })
  .then(items => {
    console.log("Items:", JSON.stringify(items, null, 4));
  });