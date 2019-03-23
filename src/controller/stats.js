export const statsLinks = (arrayObjetosLinks) => {
  let newArrayHref = [];  
  arrayObjetosLinks.forEach(element => newArrayHref.push(element.href));
  const totalLinks = newArrayHref.reduce((acum, item) => acum + (item.href !== ''), 0);
  const uniqLinks = newArrayHref.filter((value, index, result) => result.indexOf(value) === index).length;  
  return {totalLinks, uniqLinks};
};

// console.log(totalLinksStats(arrayObjLinks));