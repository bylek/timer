const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  const User = req.app.get('models').User;

  let email = req.body.email;
  let password = req.body.password;

  User
    .findOne({where: {email: email}})
    .then(function(user){
      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });

      } else if (user) {
        if (user.get('password') != password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });

        } else {
          let token = jwt.sign(user.toJSON(), config.get('secret'), {
            expiresIn: '1d'
          });

          res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
          });
        }

      }
    });
});

module.exports = router;
