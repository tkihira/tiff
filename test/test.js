'use strict';

const fs = require('fs');
const TIFFDecoder = require('..').TIFFDecoder;

var img = fs.readFileSync(__dirname + '/img/bio.tif');

var decoder = new TIFFDecoder(img);
var result = decoder.decode();

console.log(result.ifd[0].data.slice(0, 10));
