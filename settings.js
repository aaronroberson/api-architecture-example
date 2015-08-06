'use strict';

var settings = {
  local: {
    httpOptions: {
      name: 'Foobar API',
      jwtSecret: 'lala lala lala lala',
      version: '2.0.0'
    }
  },
  development: {
    httpOptions: {
      name: 'Foobar API',
      jwtSecret: 'lala lala lala lala',
      version: '2.0.0'
    }
  },
  stage: {
    httpOptions: {
      name: 'Foobar API',
      jwtSecret: 'hehe hehe hehe hehe',
      version: '1.0.0'
    }
  },
  production: {
    httpOptions: {
      name: 'Foobar API',
      jwtSecret: 'hoho hoho hoho hoho',
      version: '1.0.0'
    }
  }
};

module.exports = settings;
