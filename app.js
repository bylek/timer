const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize sequelize models
const models = require('./models');
const sequelize = models.sequelize;
app.set('models', models);

// routes
require('./routes')(app);

sequelize.sync({force: false}).then(function(){
    app.listen(port);
    console.log('Listening on port ' + port);
});

