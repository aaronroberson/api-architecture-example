'use strict';

var User = require('./user.model');

var scrud = require('mongoose-scrud')(User, {relate: false});

function search(req, res, next) {

  req.query = request.query || {};

  // Support for nested resources such as
  // GET /portal/accounts/:id/transactions
  if (req.params.id || req.accountId) {
    req.query.account = req.params.id || req.accountId;
  }

  // Default sort to descending order on createdAt
  req.query.__sort = req.query.__sort || '-createdAt';

  scud.search(req.query, function(error, results) {
    error ? response.json(500, {code: 'MongoError', message: error}) : response.json(200, results);
  });
}

function create(req, res, next) {
  scud.create(req.body, function(error, results) {
    error ? response.json(500, {code: 'MongoError', message: error}) : response.json(200, results);
  });
}

function read(req, res, next) {
  scud.read(req.params.id, function(error, results) {
    error ? response.json(500, {code: 'MongoError', message: error}) : response.json(200, results);
  });
}

function update(req, res, next) {
  scud.create(id, req.body, function(error, results) {
    error ? response.json(500, {code: 'MongoError', message: error}) : response.json(200, results);
  });
}

function del(req, res, next) {
  scud.del(req.params.id, function(error, results) {
    error ? response.json(500, {code: 'MongoError', message: error}) : response.json(200, results);
  });
}

module.exports = {
  search: search,
  create: create,
  read: read,
  update: update,
  del: del
};

/* ALTERNATIVELY

exports.search = search;
exports.create = create;
exports.read = read;
exports.update = update;
exports.del = del;

 */