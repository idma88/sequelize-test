var Sequelize = require('sequelize');

var sequelize_cfg = {
  define: {
    timestamps: false,
    freezeTableName: false
  },
  logging: true
}

var sequelize;
if (0) {
  // SQLite
  sequelize = new Sequelize(Object.assign(sequelize_cfg, {
    dialect: 'sqlite',
    storage: 'vtc-hub.sqlite',
  }));
} else {
  // MySQL
  sequelize = new Sequelize('vtc-hub', 'vtchub', 'p@SSvv0rd', 
    Object.assign(sequelize_cfg, {
      dialect: 'mysql',
      define: Object.assign(sequelize_cfg.define, {
        charset: 'utf8',
        dialectOptions: {
          collate: 'utf8_general_ci'
        }
      })
    })
  );
}

var models = require('sequelize-auto-import')(
  sequelize,
  __dirname + '/models',
  { recursive: true }
);
console.log('MODELS', models);
if (1) sequelize.sync();

var controllers = require('require-all')({
  dirname :  __dirname + '/controllers',
  //filter  :  /(.+Controller)\.js$/,
  map     : function (name, path) { return name.replace(/Controller/g, '') },
  resolve : function (controller) { return controller(models); },
});
console.log('CONTROLLERS', controllers);

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