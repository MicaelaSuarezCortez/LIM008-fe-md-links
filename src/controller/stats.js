export const totalAndUniqueLinks = (arrayObjetosLinks) => {
  let newArrayHref = [];  
  arrayObjetosLinks.forEach(element => newArrayHref.push(element.href));
  const totalLinks = newArrayHref.length;
  const uniqLinks = newArrayHref.filter((value, index, array) => array.indexOf(value) === index).length;  
  return {totalLinks, uniqLinks};
};


// console.log(statsLinks(arrayObjLinks));


export const linksBroken = (arrayObjetosValidate) => {
  let newArrayStatusText = [];  
  let broken = 0;
  arrayObjetosValidate.forEach(element => newArrayStatusText.push(element.statusText));
  for (let i = 0; i < newArrayStatusText.length; i++) {
    if (newArrayStatusText[i] !== 'OK') {
      broken ++;
    } else {
      broken = broken;
    }
  }
  return {broken};
};


