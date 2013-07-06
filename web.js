var express = require('express'),
  app = express.createServer( express.logger() ),
  fs = require('fs'),
  html_string = fs.readFileSync('bitstarter.html').toString();

app.get('/', function(request, response) {
  response.send( html_string );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
