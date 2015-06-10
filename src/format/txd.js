/* jslint bitwise: true */

'use strict';

var debug = require('debug')('mashed:format:txd');
var jBinary = require('jbinary');

var format = {
  'jBinary.all': 'txd',
  'jBinary.littleEndian': true,

  txd_file: {
    id: 'uint32',
    chunkSize: 'uint32',
    marker: 'uint32'
  },

  txd_info: {
    id: 'uint32',
    chunkSize: 'uint32',
    marker: 'uint32',
    count: 'uint16',
    unknown: 'uint16'
  },

  txd_texture: {
    id: 'uint32',
    chunkSize: 'uint32',
    marker: 'uint32'
  },

  txd_texture_data: {
    id: 'uint32',
    chunkSize: 'uint32',
    marker: 'uint32',
    version: 'uint32',
    filterFlags: 'uint32',
    name: ['string0', 32],
    alphaName: ['string0', 32],
    alphaFlags: 'uint32',
    direct3DTextureFormat: 'uint32',
    width: 'uint16',
    height: 'uint16',
    depth: 'uint8',
    mipmapCount: 'uint8',
    texcodeType: 'uint8',
    flags: 'uint8',
    palette: ['array', 'uint16', function(context) {
      var length = (context.depth === 8) ? (256 * 4) : 0;
      debug(length);
      return context.depth;
    }]
  },

  txd: jBinary.Type({
    read: function() {
      var self = this;
      var data = {};

      try {
        data.file = this.binary.read('txd_file');
        data.info = this.binary.read('txd_info');
        data.texture = this.binary.read('txd_texture');
        debug(this.binary.tell().toString(16));
        data.textureData = this.binary.read('txd_texture_data');
      }
      catch(ex) {
        debug(ex);
      }

      return data;
    }
  })
};

module.exports = format;