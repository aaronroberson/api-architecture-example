'use strict';

var restify = require('restify');
var config = require('./config/environment');
var server = restify.createServer(config.httpOptions);

restify.CORS.ALLOW_HEADERS.push('Authorization');
restify.CORS.ALLOW_HEADERS.push('Accept-Encoding');
restify.CORS.ALLOW_HEADERS.push('Accept-Language');

server.use(restify.CORS());
server.use(restify.bodyParser({ mapParams: false }));
server.use(restify.queryParser());
server.use(restify.gzipResponse());

require('./router')(server);

/* TODO: SOCKET.IO
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});

require('./config/socketio')(socketio);
*/

server.listen(config.port, function() {
  console.log('Server listening on %d, in %s mode', config.port, process.env.NODE_ENV || 'development');
});

// Expose server
exports = module.exports = server;