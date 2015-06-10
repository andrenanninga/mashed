'use strict';

var debug = require('debug')('mashed:loader:dff');
var util = require('util');
var jBinary = require('jbinary');
var dffFormat = require('../format/dff');

var loadDff = function(file, callback) {

  debug('loadDff %s', file);

  jBinary.load(file, dffFormat, function(err, binary) {
    if(err) {
      debug(err);
      return callback(err);
    }

    var data = binary.readAll();

    debug(util.inspect(data, false, 10, true));
    callback(null, data);
  });

};

module.exports = loadDff;