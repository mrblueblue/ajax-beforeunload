var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.text())

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/endpoint', function(req, res){
  console.log(req.body);
});

app.listen(3000, function(){
  console.log('Listening for requests!')
});
