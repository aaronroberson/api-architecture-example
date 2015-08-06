'use strict';

var _ = require('lodash');
var path = require('path');
var braintree = require('braintree');

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 443,

  // HTTP options
  httpOptions: {
    name: 'Foobar API',
    jwtSecret: 'lala lala lala lala',
    version: '2.0.0'
  },

  braintree: {
    environment: braintree.Environment.Sandbox,
    merchantId: '',
    publicKey: '',
    privateKey: ''
  },

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'fng-secret'
  },

  facebook: {
    clientID: process.env.FACEBOOK_ID || 'id',
    clientSecret: process.env.FACEBOOK_SECRET || 'secret',
    callbackURL: (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },

  twitter: {
    clientID: process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL: (process.env.DOMAIN || '') + '/auth/twitter/callback'
  },

  google: {
    clientID: process.env.GOOGLE_ID || 'id',
    clientSecret: process.env.GOOGLE_SECRET || 'secret',
    callbackURL: (process.env.DOMAIN || '') + '/auth/google/callback'
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(all, require('./' + process.env.NODE_ENV || 'development' + '.js') || {});
