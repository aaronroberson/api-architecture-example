'use strict';

var restify = require('restify');
var port = (process.env.NODE_ENV === 'local') ? process.env.PORT || 80 : 443;
var server = restify.createServer();
var router = require('./router')(server);

restify.CORS.ALLOW_HEADERS.push('Authorization');
restify.CORS.ALLOW_HEADERS.push('Accept-Encoding');
restify.CORS.ALLOW_HEADERS.push('Accept-Language');

server.use(restify.CORS());
server.use(restify.bodyParser({ mapParams: false }));
server.use(restify.queryParser());
server.use(restify.gzipResponse());

var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});

server.listen(port, function() {
  // Server has been started and is listening on the specified port
});