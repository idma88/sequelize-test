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
sequelize.sync();

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
  models
}