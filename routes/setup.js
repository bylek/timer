const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const User = req.app.get('models').User;
  const Timer = req.app.get('models').Timer;

  Timer.create({
    comment: 'in progress',
    user_id: 1,
    start_date: new Date(),
  });

  Timer.create({
    comment: 'old timer',
    user_id: 1,
    start_date: new Date(),
    finish_date: new Date(),
  });

  res.json({
    success: true,
    message: 'Data generated!'
  });
});

module.exports = router;
