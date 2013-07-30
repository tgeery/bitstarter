var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new Buffer(256);

  var data = fs.readFileSync('index.html', 'utf8');
  var data2 = fs.readFileSync('eventplannerlogo.png','utf8');
  response.send(data2);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
