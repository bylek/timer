const jwt = require('jsonwebtoken');
const config = require('config');
const timers = require('./timers');
const authenticate = require('./authenticate');
const register = require('./register');
const setup = require('./setup');

module.exports = function(app){
  app.use('/api/authenticate', authenticate);
  app.use('/api/register', register);
  app.use('/api/setup', setup);

  app.use('/api/timers', isAuthenticated, timers);
};

function isAuthenticated(req, res, next) {
  let token = (req.headers['authorization'] || req.query.token || '').replace(/^Bearer /, '');

  if (token) {
    jwt.verify(token, config.get('secret'), function(err, user) {
      if (err) {
        return res.status(403).send({
          success: false,
          message: 'Failed to authenticate token.'
        });

      } else {
        const User = req.app.get('models').User;

        User
          .findById(user.id)
          .then(function(user){
            if (user){
              req.user = user;
              next();

            } else {
              return res.status(403).send({
                success: false,
                message: 'User doesn\'t exist.'
              });
            }
          });
      }
    });

  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
}