"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdlinks = void 0;

var _path = require("../controller/path.js");

var _contentFile = require("../controller/content-file.js");

var _validateLink = require("../controller/validate-link.js");

const mdlinks = (path, options) => new Promise(resolve => {
  const validaPath = (0, _path.validatePathAbsolute)(path);
  let route = path;

  if (validaPath === false) {
    route = (0, _path.convertPathToAbsolute)(path);
  }

  const arrayPathFileMD = (0, _path.saveFileMdWithPath)(route); // guardar la ruta de archivos .md 

  const arrayLinks = (0, _contentFile.extractContentFileMd)(arrayPathFileMD); // extrae el contenido de los archivos .md 

  if (options.validate === true) {
    (0, _validateLink.validateLinks)(arrayLinks) // retorna array de objetos link con status y statusText
    .then(response => resolve(response));
  } else {
    resolve(arrayLinks);
  }
});

exports.mdlinks = mdlinks;