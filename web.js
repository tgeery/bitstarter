var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new Buffer(256);
 
  var data = fs.readFileSync('index.html');
  var display = buffer.toString(data,0,data.length);
  buffer.write(display);
  response(display);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
