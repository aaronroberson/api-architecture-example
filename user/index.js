module.exports = function(server, middleware) {
  'use strict';

  var controller = require('./user.controller');

  /* NOTE:
   Although it is common to see RESTful APIs using put for update,
   there is not a 1:1 relationship between HTTP methods and CRUD.
   Acknowledging common practice, a PUT can be included additionally.
   */

  server.get({path: '/', version: '2.0.0'}, middleware, controller.search);
  server.post({path: '/', version: '2.0.0'}, middleware, controller.create);
  server.get({path: '/:id', version: '2.0.0'}, middleware, controller.read);
  server.post({path: '/:id', version: '2.0.0'}, middleware, controller.update);
  server.del({path: '/:id', version: '2.0.0'}, middleware, controller.del);

};
