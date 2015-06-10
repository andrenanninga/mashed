'use strict';

var _         = require('underscore');
var debug     = require('debug')('mashed:app:dff');
var mkdirp    = require('mkdirp');
var fs        = require('fs');
var path      = require('path');
var loaderDff = require('../loader/dff');

// var file = path.resolve(__dirname, '../../data/tracks/training.dff');
// var file = path.resolve(__dirname, '../../data/tracks/egypt.dff');
var file = path.resolve(__dirname, '../../data/dff/crate.dff');

loaderDff(file, function(err, data) {
  if(err) {
    return console.error(err);
  }


});

  // _.each(data.files, function(file) {
  //   var dirpath = path.resolve(__dirname, '../../output/dff/');
  //   var filepath = path.resolve(__dirname, '../../output/dff/', file.name);

  //   debug('write file %s', filepath);
    
  //   mkdirp.sync(dirpath);
  //   fs.writeFileSync(filepath, file.binary);
  // });