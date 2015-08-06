'use strict';

var braintree = require('braintree');

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  braintree: {
    environment: braintree.Environment.Production,
    merchantId: '',
    publicKey: '',
    privateKey: ''
  }
};