"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsLinks = void 0;

const statsLinks = arrayObjetosLinks => {
  let newArrayHref = [];
  arrayObjetosLinks.forEach(element => newArrayHref.push(element.href));
  const totalLinks = newArrayHref.reduce((acum, item) => acum + (item.href !== ''), 0);
  const uniqLinks = newArrayHref.filter((value, index, result) => result.indexOf(value) === index).length;
  return {
    totalLinks,
    uniqLinks
  };
}; // console.log(totalLinksStats(arrayObjLinks));


exports.statsLinks = statsLinks;