const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const Timer = req.app.get('models').Timer;

  Timer
    .findAll({
      where: {
        user_id: req.user.id
      }
    })
    .then(function(timers){
      res.json({
        success: true,
        timers: timers
      });
    });
});

module.exports = router;
