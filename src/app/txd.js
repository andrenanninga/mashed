'use strict';

var _         = require('underscore');
var debug     = require('debug')('mashed:app:txd');
var mkdirp    = require('mkdirp');
var fs        = require('fs');
var path      = require('path');
var loaderTxd = require('../loader/txd');

var file = path.resolve(__dirname, '../../data/txd/sample.txd');

loaderTxd(file, function(err, data) {
  if(err) {
    return console.error(err);
  }

  // _.each(data.files, function(file) {
  //   var dirpath = path.resolve(__dirname, '../../output/txd/');
  //   var filepath = path.resolve(__dirname, '../../output/txd/', file.name);

  //   debug('write file %s', filepath);
    
  //   mkdirp.sync(dirpath);
  //   fs.writeFileSync(filepath, file.binary);
  // });

});
