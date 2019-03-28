const fetch = require('node-fetch');

export const validateLinks = (array) => {
  const linkStatus = array.map(link =>
    new Promise((resolve, reject) => {
      fetch(link.href)
        .then((objFetch) => {
          if (objFetch.status >= 200 && objFetch.status <= 399) {
            link.status = objFetch.status;
            // link.statusText = objFetch.statusText;
            link.statusText = 'OK';
            resolve(link);
          } else {
            link.status = objFetch.status;
            link.statusText = 'Fail';
            resolve(link);
          }
        }).catch((objFetch) => {          
          link.status = 'Fail';
          link.statusText = 'URL inválida';
          resolve(link);
        });
    }));
  return Promise.all(linkStatus);
};
// const input = [{
//   href: 'https://www.google.com/',
//   text: 'https://www.google.com/',
//   file:
//     'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
// },
// {
//   href: 'http://algo.com/2/3/',
//   text: 'http://algo.com/2/3/',
//   file:
//     'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
// },
// {
//   href: 'https://rpp.pe/',
//   text: 'https://rpp.pe/',
//   file:
//     'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
// },
// {
//   href: 'http://mediadiscovyyyyyyyyery.net',
//   text: 'http://mediadiscovyyyyyyyyery.net',
//   file:
//     'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
// }
// ];
// validateLinks(input)
//   .then((res) => console.log(res))
//   // .catch((res) => console.log(res));


