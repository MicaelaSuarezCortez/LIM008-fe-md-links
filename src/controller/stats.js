// condition para si en caso es true usa la función de rotos, si es false, solo total y únicos
// en función totalAndUniqueLinks agregar una condición si es caso es validate true llame a función broken
const output = [{
  href: 'https://www.google.com/',
  text: 'https://www.google.com/',
  file:
    'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md',
  status: 200,
  statusText: 'OK'
},
{
  href: 'http://algo.com/2/3/',
  text: 'http://algo.com/2/3/',
  file:
    'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md',
  status: 404,
  statusText: 'Fail'
},
{
  href: 'https://rpp.pe/',
  text: 'https://rpp.pe/',
  file:
    'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md',
  status: 200,
  statusText: 'OK'
},
{
  href: 'http://mediadiscovyyyyyyyyery.net',
  text: 'http://mediadiscovyyyyyyyyery.net',
  file:
    'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md',
  status: 'Fail',
  statusText: 'URL inválida'
}
];

export const totalAndUniqueLinks = (arrayObjetosLinks) => {
  let newArrayHref = [];  
  arrayObjetosLinks.forEach(element => newArrayHref.push(element.href));
  const totalLinks = newArrayHref.length;
  const uniqLinks = newArrayHref.filter((value, index, array) => array.indexOf(value) === index).length;  
  return {totalLinks, uniqLinks};
};

// console.log(totalAndUniqueLinks(output));


export const linksBroken = (arrayObjetosLinks) => {
  let newArrayStatusText = [];  
  let broken = 0;
  arrayObjetosLinks.forEach(element => newArrayStatusText.push(element.statusText));
  for (let i = 0; i < newArrayStatusText.length; i++) {
    if (newArrayStatusText[i] !== 'OK') {
      broken ++;
    } else {
      broken = broken;
    }
  }
  return {broken};
};
// console.log(linksBroken(output));


export const statsLinks = (arrayObjetosLinks, broken) => {
  const totalUniqueLinks = totalAndUniqueLinks(arrayObjetosLinks);
  if (broken) {
    const linkBrokens = linksBroken(arrayObjetosLinks);
    const stats = {
      total: totalUniqueLinks.totalLinks,
      unicos: totalUniqueLinks.uniqLinks,
      rotos: linkBrokens.broken
    };
    return stats;
  }
  return totalUniqueLinks;  
};

// console.log(statsPrueba(output, false));

