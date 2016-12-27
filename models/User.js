module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    tableName: 'users',
    underscored: true
  });
};