"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

const fetch = require('node-fetch');

const validateLinks = array => {
  const linkStatus = array.map(link => new Promise((resolve, reject) => {
    fetch(link.href).then(objFetch => {
      if (objFetch.status >= 200 && objFetch.status <= 399) {
        link.status = objFetch.status; // link.statusText = objFetch.statusText;

        link.statusText = 'OK';
        resolve(link);
      } else {
        link.status = objFetch.status;
        link.statusText = 'Fail';
        resolve(link);
      }
    }).catch(objFetch => {
      link.status = 'Fail';
      link.statusText = 'URL inválida';
      resolve(link);
    });
  }));
  return Promise.all(linkStatus);
};

exports.validateLinks = validateLinks;