'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var authTypes = ['github', 'twitter', 'facebook', 'google'];

var UserSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  hashedPassword: String,
  provider: String,
  salt: String,
  facebook: {},
  twitter: {},
  google: {},
  github: {}
});

module.exports = mongoose.model('User', UserSchema);