"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linksBroken = exports.statsLinks = void 0;

const statsLinks = arrayObjetosLinks => {
  let newArrayHref = [];
  arrayObjetosLinks.forEach(element => newArrayHref.push(element.href));
  const totalLinks = newArrayHref.reduce((acum, item) => acum + (item.href !== ''), 0);
  const uniqLinks = newArrayHref.filter((value, index, array) => array.indexOf(value) === index).length;
  return {
    totalLinks,
    uniqLinks
  };
}; // console.log(statsLinks(arrayObjLinks));


exports.statsLinks = statsLinks;

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