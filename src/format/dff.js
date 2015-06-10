/* jslint bitwise: true */

'use strict';

var debug = require('debug')('mashed:format:dff');
var jBinary = require('jbinary');

// RW section IDS
// http://www.gtamodding.com/wiki/List_of_RW_section_IDs
var STRUCT        = 0x0001;
var STRING        = 0x0002;
var EXTENSION     = 0x0003;
var CAMERA        = 0x0005;
var TEXTURE       = 0x0006;
var MATERIAL      = 0x0007;
var MATERIAL_LIST = 0x0008;
var FRAME_LIST    = 0x000E;
var GEOMETRY      = 0x000F;
var CLUMP         = 0x0010;

var format = {
  'jBinary.all': 'dff',
  'jBinary.littleEndian': true,

  // http://www.gtamodding.com/wiki/RenderWare_binary_stream_file
  dff_section_header: {
    id: 'uint32',
    sectionSize: 'uint32',
    version: 'uint32'
  },

  // http://www.gtamodding.com/wiki/Clump_(RW_Section)
  dff_clump: {
    numSections: 'uint32',
    numLights: 'uint32',
    numCameras: 'uint32'
  },

  // http://www.gtamodding.com/wiki/Frame_List_(RW_Section)
  dff_frame_list: {
    numFrame: 'uint32',
    rotMatrix: ['blob', 32],
    position: ['blob', 12],
    parentFrame: 'uint32',
    matrixFlags: 'uint32'
  },

  dff: jBinary.Type({
    read: function() {
      var self = this;
      var data = {};

      try {
        // unknown header
        // this.binary.skip(24);
        data = getSection(this.binary);

        // data.header2 = this.binary.read('dff_section');
        // data.clump = this.binary.read('dff_clump');
        // data.header3 = this.binary.read('dff_section');
      }
      catch(ex) {
        debug(ex);
      }

      return data;
    }
  })
};

var getSection = function(binary) {

  var header = binary.read('dff_section_header');
  var start = binary.tell();
  var end = header.sectionSize + start;
  var section = {};

  debug(header);

  while(end > binary.tell()) {
    var struct;

    if(header.id === CLUMP)           { struct = 'dff_clump'; }
    // else if(header.id === FRAME_LIST) { struct = 'dff_frame_list'; }

    section.header = binary.read('dff_section_header');
    if(struct) {
      debug(struct);
      section.struct = binary.read(struct);
      section.child = getSection(binary);
    }
    else {
      debug('go to 0x%s', end.toString(16));
      binary.seek(end);
    }
  }

  return section;

};

module.exports = format;