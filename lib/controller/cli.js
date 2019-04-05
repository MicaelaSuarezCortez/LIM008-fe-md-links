#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _mdLinks = require("../controller/md-links.js");

var _stats = require("../controller/stats.js");

const [,, ...args] = process.argv;
const path = process.argv;
const pathFile = path;

const cli = (pathFile, option) => {
  if (pathFile.includes('--validate') && pathFile.includes('--stats')) {
    const optionValidate = {
      validate: true
    };
    option = optionValidate;
    const promesaMDLinksStats = (0, _mdLinks.mdlinks)(pathFile[2], option).then(result => (0, _stats.statsLinks)(result, true));
    return promesaMDLinksStats;
  }

  if (pathFile.includes('--validate')) {
    const optionValidate = {
      validate: true
    };
    option = optionValidate;
    const links = (0, _mdLinks.mdlinks)(pathFile[2], option);
    return links;
  }

  if (pathFile.includes('--stats')) {
    const optionValidate = {
      validate: false
    };
    option = optionValidate;
    const links2 = (0, _mdLinks.mdlinks)(pathFile[2], option).then(result => (0, _stats.totalAndUniqueLinks)(result));
    return links2;
  } else {
    const optionValidate = {
      validate: false
    };
    option = optionValidate;
    const links2 = (0, _mdLinks.mdlinks)(pathFile[2], option);
    return links2;
  }
};

exports.cli = cli;
cli(pathFile, {
  validate: false
}).then(result => console.log(result));