const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    name: DataTypes.STRING,
    password_digest: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    tableName: 'users',
    underscored: true,
    indexes: [{unique: true, fields: ['email']}],
    instanceMethods: {
      authenticate: function(value) {
        return bcrypt.compareSync(value, this.password_digest);
      }
    }
  });

  User.beforeCreate(hashPassword);
  User.beforeUpdate(hashPassword);

  return User;
};

function hashPassword(user, options, callback){
  if (user.get('password')) {
    bcrypt.hash(user.get('password'), 10, function(err, hash) {
      if (err) {
        return callback(err);

      } else {
        user.set('password_digest', hash);
        return callback(null, options);

      }
    });
  }
}