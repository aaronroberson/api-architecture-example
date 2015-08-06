var Session = require('../models').Session;
var restify = require('restify');

module.exports = function(request, response, next) {

  var sessionToken = request.headers['x-foo-session-token'];

  if (sessionToken == null) {
    return next(new restify.BadRequestError('missing session token.'));
  }

  Session
    .findOne({_id: sessionToken})
    .exec(function(error, session) {
      if (error) {
        response.json(500, {code: 'MongoError', message: error});
        return next();
      }

      if (!session) {
        return next(new restify.NotAuthorizedError('session'));
      } else {
        request.accountId = session.account;
        request.braintreeId = session.braintreeId;
        session.save();
      }

      return next();
    });
};
