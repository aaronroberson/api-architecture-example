module.exports = function(server, middleware) {
  'use strict';

  var controller = require('./user.controller');

  /* NOTE:
   Although it is common to see RESTful APIs using put for update,
   there is not a 1:1 relationship between HTTP methods and CRUD.
   Acknowledging common practice, a PUT can be included additionally.
   */

  /* NOTE:
   The use of the middleware here is not very flexible. May change.
   */

  server.get({path: '/', version: '2.0.0'}, middleware.jwt.protect, controller.search);
  server.post({path: '/', version: '2.0.0'}, middleware.jwt.protect, controller.create);
  server.get({path: '/:id', version: '2.0.0'}, middleware.jwt.protect, controller.read);
  server.post({path: '/:id', version: '2.0.0'}, middleware.jwt.protect, controller.update);
  server.del({path: '/:id', version: '2.0.0'}, middleware.jwt.protect, controller.del);

};
