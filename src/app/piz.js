'use strict';

var _         = require('underscore');
var debug     = require('debug')('mashed:app:piz');
var mkdirp    = require('mkdirp');
var fs        = require('fs');
var path      = require('path');
var loaderPiz = require('../loader/piz');

// var file = path.resolve(__dirname, '../../data/tracks/training.piz');
// var file = path.resolve(__dirname, '../../data/tracks/egypt.piz');
var file = path.resolve(__dirname, '../../data/vehicles/formula.piz');

loaderPiz(file, function(err, data) {
  if(err) {
    return console.error(err);
  }

  _.each(data.files, function(file) {
    var dirpath = path.resolve(__dirname, '../../output/piz/');
    var filepath = path.resolve(__dirname, '../../output/piz/', file.name);

    debug('write file %s', filepath);
    
    mkdirp.sync(dirpath);
    fs.writeFileSync(filepath, file.binary);
  });

});
