var Sequelize = require('sequelize');
var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'vtc-hub.sqlite',
  define: {
    timestamps: false,
    freezeTableName: false
  },
  logging: false
});
var models = require('sequelize-auto-import')(sequelize, __dirname + '/models');

var controllers = require('require-all')({
  dirname :  __dirname + '/controllers',
  //filter  :  /(.+Controller)\.js$/,
  map     : function (name, path) { return name.replace(/Controller/g, '') },
  resolve : function (controller) { return controller(models); },
});
//sequelize.sync();

console.log('\x1b[41m%s\x1b[0m', 'MODELS', models);
console.log('\x1b[41m%s\x1b[0m', 'CONTROLLERS', controllers);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//     sequelize.sync()
//     // .then(result => console.log(result))
//     // .catch(err => console.log(err));
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

module.exports = {
  sequelize,
  models,
  controllers
}