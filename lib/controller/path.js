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
  const files = fs.readdirSync(pathAbsolute); // retorna un array que contiene los nombres de files

  files.forEach(element => {
    let filePath = path.join(pathAbsolute, element);

    if (validateFile(filePath) && validateFileMd(filePath)) {
      arrayPath.push(filePath);
    } else {
      arrayPath = arrayPath.concat(saveFileMdWithPath(filePath));
    }
  });
  return arrayPath;
};

exports.saveFileMdWithPath = saveFileMdWithPath;