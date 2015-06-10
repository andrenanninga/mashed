/* jslint bitwise: true */

'use strict';

var debug = require('debug')('mashed:format:txd');
var jBinary = require('jbinary');

// raster formats
// http://www.gtamodding.com/wiki/Texture_Native_Struct
var FORMAT_DEFAULT         = 0x0000;
var FORMAT_1555            = 0x0100; // (1 bit alpha, RGB 5 bits each; also used for DXT1 with alpha)
var FORMAT_565             = 0x0200; // (5 bits red, 6 bits green, 5 bits blue; also used for DXT1 without alpha)
var FORMAT_4444            = 0x0300; // (RGBA 4 bits each; also used for DXT3)
var FORMAT_LUM8            = 0x0400; // (gray scale, D3DFMT_A8L8)
var FORMAT_8888            = 0x0500; // (RGBA 8 bits each)
var FORMAT_888             = 0x0600; // (RGB 8 bits each, D3DFMT_X8R8G8B8)
var FORMAT_555             = 0x0A00; // (RGB 5 bits each - rare, use 565 instead, D3DFMT_X1R5G5B5)
var FORMAT_EXT_AUTO_MIPMAP = 0x1000; // (RW generates mipmaps, see special section below)
var FORMAT_EXT_PAL8        = 0x2000; // (2^8 = 256 palette colors)
var FORMAT_EXT_PAL4        = 0x4000; // (2^4 = 16 palette colors)
var FORMAT_EXT_MIPMAP      = 0x8000; // (mipmaps included)

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
    rasterFormat: 'uint32',
    direct3DTextureFormat: 'uint32',
    width: 'uint16',
    height: 'uint16',
    depth: 'uint8',
    mipmapCount: 'uint8',
    texcodeType: 'uint8',
    flags: 'uint8',
    palette: ['array', 'uint16', function(context) {
      // if(context.rasterFormat === FOR)

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