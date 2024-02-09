// Create web server
// Run the server and test it with a browser

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var path = url_parts.pathname;

  console.log('Request for ' + path + ' received.');
  if (path == '/comments') {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify({author: "Pete Hunt", text: "This is one comment"}));
    response.write(JSON.stringify({author: "Jordan Walke", text: "This is *another* comment"}));
    response.end();
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not Found\n");
    response.end();
  }
});

// Listen on port 8000, IP defaults to