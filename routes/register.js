const jwt = require('jsonwebtoken');
const config = require('config');
const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  const User = req.app.get('models').User;

  let email = req.body.email;
  let password = req.body.password;
  let name = req.body.name;

  User
    .findOne({where: {email: email}})
    .then(function(user){
      if (!user) {
        User.create({
          email,
          password,
          name
        }).then(function(user) {
          let token = jwt.sign(user.getJWTPayload(), config.get('secret'), {
            expiresIn: '1d'
          });

          res.json({
            success: true,
            message: 'Register successful!',
            token: token
          });
        });

      } else {
        res.json({ success: false, message: 'Register failed. User already exists.' });

      }
    });
});

module.exports = router;
