'use strict';

var braintree = require('braintree');

// Staging specific configuration
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