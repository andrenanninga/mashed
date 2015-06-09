/* jslint bitwise: true */

'use strict';

var _ = require('underscore');
var debug = require('debug')('mashed:format:piz');
var jBinary = require('jbinary');

var format = {
  'jBinary.all': 'Piz',
  'jBinary.littleEndian': true,

  Piz: jBinary.Type({
    read: function() {
      var self = this;
      var data = {};

      try {
        // first eight bits always contain the header 'PIZ'
        data.header = this.binary.read(['string0', 8]);

        // the number of files in the archive
        data.numFiles = this.binary.read('uint16');

        // the list of files start at 0x800
        this.binary.seek(0x800);

        data.files = [];
        _.times(data.numFiles, function(i) {
          var file = {};

          // the name of the file
          file.name = this.binary.read(['string0', 32]);
          // empty
          this.binary.skip(0x54); 
          // start position of the file within the .piz 
          file.posStart = this.binary.read('uint32');
          // byte length of the file
          file.length = this.binary.read('uint32');

          file.unknown = this.binary.read('uint32');

          file.binary = this.binary.seek(file.posStart, function() {
            return self.binary.read(['blob', file.length]);
          });

          // some numbers probably dealing with the size and position

          data.files.push(file);
        }, this);
      }
      catch(ex) {
        debug(ex);
      }

      return data;
    }
  })
};

module.exports = format;