const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const Timer = req.app.get('models').Timer;

  Timer
    .findAll({
      where: {
        user_id: req.user.id
      }
    })
    .then(function(timers){
      res.json(timers);
    });
});

router.patch('/:id', function(req, res){
  const Timer = req.app.get('models').Timer;

  Timer
    .findById(req.params.id)
    .then(function(timer){
      if (timer) {
        timer.update(req.body)
          .then(function(timer){
            res.json(timer);
          });

      } else {
        res.status(403).send({
          success: false,
          message: 'Timer doesn\'t exist.'
        });

      }
    });
});

router.post('/', function(req, res){
  const Timer = req.app.get('models').Timer;

  Timer.create({
      user_id: req.user.id,
      start_date: new Date()
    })
    .then(function(timer){
      res.json(timer);
    });
});

module.exports = router;
