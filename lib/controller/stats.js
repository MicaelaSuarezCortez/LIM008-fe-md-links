"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsLinks = exports.linksBroken = exports.totalAndUniqueLinks = void 0;

const totalAndUniqueLinks = arrayObjetosLinks => {
  let newArrayHref = [];
  arrayObjetosLinks.forEach(element => newArrayHref.push(element.href));
  const totalLinks = newArrayHref.length;
  const uniqLinks = newArrayHref.filter((value, index, array) => array.indexOf(value) === index).length;
  return {
    totalLinks,
    uniqLinks
  };
}; // console.log(totalAndUniqueLinks(output));


exports.totalAndUniqueLinks = totalAndUniqueLinks;

const linksBroken = arrayObjetosLinks => {
  let newArrayStatusText = [];
  let broken = 0;
  arrayObjetosLinks.forEach(element => newArrayStatusText.push(element.statusText));

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
}; // console.log(linksBroken(output));


exports.linksBroken = linksBroken;

const statsLinks = (arrayObjetosLinks, broken) => {
  const statsTotalUniqueLinks = totalAndUniqueLinks(arrayObjetosLinks);

  if (broken) {
    const linkBrokens = linksBroken(arrayObjetosLinks);
    const statsTotalUniqueBrokenLinks = {
      total: statsTotalUniqueLinks.totalLinks,
      unique: statsTotalUniqueLinks.uniqLinks,
      broken: linkBrokens.broken
    };
    return statsTotalUniqueBrokenLinks;
  }

  return statsTotalUniqueLinks;
}; // console.log(statsLinks(arrayObjValidate, false));


exports.statsLinks = statsLinks;