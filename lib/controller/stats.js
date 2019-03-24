"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linksBroken = exports.totalAndUniqueLinks = void 0;

const totalAndUniqueLinks = arrayObjetosLinks => {
  let newArrayHref = [];
  arrayObjetosLinks.forEach(element => newArrayHref.push(element.href));
  const totalLinks = newArrayHref.length;
  const uniqLinks = newArrayHref.filter((value, index, array) => array.indexOf(value) === index).length;
  return {
    totalLinks,
    uniqLinks
  };
}; // console.log(statsLinks(arrayObjLinks));


exports.totalAndUniqueLinks = totalAndUniqueLinks;

const linksBroken = arrayObjetosValidate => {
  let newArrayStatusText = [];
  let broken = 0;
  arrayObjetosValidate.forEach(element => newArrayStatusText.push(element.statusText));

  for (let i = 0; i < newArrayStatusText.length; i++) {
    if (newArrayStatusText[i] !== 'OK') {
      broken++;
    } else {
      broken = broken;
    }
  }

  return {
    broken
  };
};

exports.linksBroken = linksBroken;