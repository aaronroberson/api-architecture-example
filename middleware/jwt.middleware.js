var jwt = require('jsonwebtoken');
var env = process.env.NODE_ENV || 'production';
var config = require('../config/environment');

function sign(req, res, next) {
  req.token = jwt.sign({username: req.email}, config.httpOptions.jwtSecret, {expiresInMinutes: 60 * 5});
  next();
}

function protect(req, res, next) {
  if (env === 'local') {
    return next();
  }

  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization.split(' ')[1], config.httpOptions.jwtSecret, function(err) {
      err ? res.send(401, 'You are unauthorized') : next();
    });
  } else {
    res.send(401, 'You are unauthorized');
  }
}

module.exports = {
  sign: sign,
  protect: protect
};