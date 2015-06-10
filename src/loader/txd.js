'use strict';

var debug = require('debug')('mashed:loader:txd');
var util = require('util');
var jBinary = require('jbinary');
var txdFormat = require('../format/txd');

var loadTxd = function(file, callback) {

  debug('loadTxd %s', file);

  jBinary.load(file, txdFormat, function(err, binary) {
    if(err) {
      debug(err);
      return callback(err);
    }

    var data = binary.readAll();

    debug(util.inspect(data, false, 10, true));
    callback(null, data);
  });

};

module.exports = loadTxd;