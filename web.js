var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new Buffer(256);

  fs.openSync('','rs');
  var data = fs.readFileSync('index.html', 'utf8');
  var d = buffer.write(data);
  var res = buffer.toString(d);
  response(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
