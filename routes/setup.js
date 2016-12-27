const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const User = req.app.get('models').User;

  User.create({
    email: 'bylek77@gmail.com',
    password: 'qwerty',
    name: 'bylek'
  }).then(function(err, user){
    res.json({
      success: true,
      message: 'Data generated!'
    });
  });

});

module.exports = router;
