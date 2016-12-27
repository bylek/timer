module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Timer', {
    start_date: DataTypes.DATE,
    finish_date: DataTypes.DATE
  }, {
    tableName: 'timers',
    underscored: true,
    timestamps: false
  });
};