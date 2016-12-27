const Sequelize = require('sequelize');
const config    = require('config').database;  // we use node-config to handle environments

// initialize database connection
const sequelize = new Sequelize(
  config.name,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql'
  }
);

// load models
const models = [
  'Timer',
  'User'
];
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
  m.User.hasMany(m.Timer);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;