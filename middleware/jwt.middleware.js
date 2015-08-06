var jwt = require('jsonwebtoken');
var env = process.env.NODE_ENV || 'production';
var settings = require('../settings')[env];

function sign(req, res, next) {
  req.token = jwt.sign({username: req.email}, settings.httpOptions.jwtSecret, {expiresInMinutes: 60 * 5});
  next();
}

function protect(req, res, next) {
  if (env === 'local') {
    return next();
  }

  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization.split(' ')[1], settings.httpOptions.jwtSecret, function(err) {
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