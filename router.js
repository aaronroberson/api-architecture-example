module.exports = function(server) {
  'use strict';

  var namespace = require('restify-namespace');
  var middleware = require('./middleware');
  var composableMiddleware = require('composable-middleware');

  server.get('/', function(req, res, next) {
    res.send({hello: 'fellow'});
  });

  var mw = composableMiddleware(middleware.session, middleware.jwt.protect);

  require('./user')(server, mw);

  /* Example:
    Nested resources via namespace but 100% code reuse of users module.
    The transactions module below has not been created, this is for demonstration only

    namespace(server, '/transactions', function() {

     // Establish routes such as the following:
     // GET /transactions
     // GET /transactions/:id
     // PUT /transactions
     // PUT /transactions/:id
     // DELETE /transactions/:id

     var mw = composableMiddleware(middleware.session, middleware.jwt.protect);

     require('./transactions')(server, mw);

       // Establish routes such as the following:
       // GET /transactions/accounts
       // GET /transactions/:id/accounts/:id
       // PUT /transactions/accounts
       // PUT /transactions/:id/accounts/:id
       // DELETE /transactions/:id/accounts/:id

       var mw = composableMiddleware(middleware.session, middleware.jwt.protect);

       require('./user')(server, mw);
    }
   */
};