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

/*
  // Create
  GlobalChat.create({
    userId: 1,
    message: "Hello everyone!"
  }).then(obj => {
    console.log(obj);
  })

  GlobalChat.create({
    userId: 2,
    message: "Hi! How are you?"
  }).then(obj => {
    console.log(obj);
  })
*/
/*
  // Update
  GlobalChat.update({ deleted: true }, {
    where: {
      id: 2
    }
  }).then(() => {
    console.log("Done");
  });
*/

  // Get
  GlobalChat.findAll().then(items => {
    console.log("Items:", JSON.stringify(items, null, 4));
  });