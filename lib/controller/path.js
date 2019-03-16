"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFileMdWithPath = exports.validateFileMd = exports.validateDirectory = exports.validateFile = exports.convertPathToAbsolute = exports.validatePathAbsolute = exports.existPath = void 0;

const path = require('path');

const fs = require('fs');

const existPath = paths => fs.existsSync(paths);

exports.existPath = existPath;

const validatePathAbsolute = paths => path.isAbsolute(paths);

exports.validatePathAbsolute = validatePathAbsolute;

const convertPathToAbsolute = paths => path.resolve(paths);

exports.convertPathToAbsolute = convertPathToAbsolute;

const validateFile = file => fs.lstatSync(file).isFile();

exports.validateFile = validateFile;

const validateDirectory = directory => fs.lstatSync(directory).isDirectory();

exports.validateDirectory = validateDirectory;

const validateFileMd = paths => path.extname(paths) === '.md';

exports.validateFileMd = validateFileMd;

const saveFileMdWithPath = pathAbsolute => {
  let arrayPath = [];
  const files = fs.readdirSync(pathAbsolute); // lee el directorio 

  files.forEach(file => {
    let filePath = path.join(pathAbsolute, file);

    if (validateFile(filePath) && validateFileMd(filePath)) {
      arrayPath.push(filePath);
    } else if (validateDirectory(filePath)) {
      arrayPath = arrayPath.concat(saveFileMdWithPath(filePath));
    }
  });
  return arrayPath;
}; // console.log(saveFileMdWithPath('E:\\prueba'));


exports.saveFileMdWithPath = saveFileMdWithPath;