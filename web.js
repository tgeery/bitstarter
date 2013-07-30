var express = require('express');
var PNG = require('png-js');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new Buffer(256);

  var myimg = new PNG('eventplannerlogo.png');
  var w = myimg.width;
  var h = myimg.height;
  var data = fs.readFileSync('index.html', 'utf8');
  response.send(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
