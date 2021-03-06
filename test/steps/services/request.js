'use strict';

// -----------------------------------------------------------------------------
// Wrap SuperAgent
// -----------------------------------------------------------------------------
var request = require('superagent');
var Promise = require('bluebird');
Promise.promisifyAll(request);

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------
module.exports = request;
