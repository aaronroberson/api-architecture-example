'use strict';

var braintree = require('braintree');

// Production specific configuration
// =================================
module.exports = {
  // Server port
  port: process.env.PORT || 443,
  // Server IP
  braintree: {
    environment: braintree.Environment.Production,
    merchantId: '',
    publicKey: '',
    privateKey: ''
  }
};