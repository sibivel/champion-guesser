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

app.listen(port);