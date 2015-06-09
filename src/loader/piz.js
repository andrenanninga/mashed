'use strict';

var debug = require('debug')('mashed:loader:piz');
var util = require('util');
var jBinary = require('jbinary');
var pizFormat = require('../format/piz');

var loadPiz = function(file, callback) {

  debug('loadPiz %s', file);

  jBinary.load(file, pizFormat, function(err, binary) {
    if(err) {
      debug(err);
      return callback(err);
    }

    var data = binary.readAll();

    debug(util.inspect(data, false, 10, true));
    callback(null, data);
  });

};

module.exports = loadPiz;