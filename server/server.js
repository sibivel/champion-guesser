// Get dependencies
var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000;

  console.log('RESTful API server started on: ' + port);
// var connection = mysql.createConnection({
//      host: 'localhost',
//      user: '',
//      password: '',
//      database: 'copedb'
// });
// connection.connect();

//set up angular app
app.use(express.static('dist'));

//set up router for REST api
var router = express.Router();
var routerSetup = require('./routes/routes');
routerSetup(router);
app.use('/api',router);
app.listen(port);
init();

// app.post('/api/book', function(req, res, next){
//    console.log("hello");
// });

function init(){
    const riotFunctions = require('./utils/riotFunctions');
    riotFunctions.initItemData();
    riotFunctions.initMasteryData();
    riotFunctions.initChampionData();
    riotFunctions.initSummonerSpellData();
}
