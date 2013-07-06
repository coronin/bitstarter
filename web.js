var express = require('express'),
  app = express.createServer( express.logger() ),
  fs = require('fs'),
  buf = fs.readFileSync('bitstarter.html');

app.get('/', function(request, response) {
  response.send( buf.toString() );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
