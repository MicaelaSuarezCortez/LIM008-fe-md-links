import { totalAndUniqueLinks, linksBroken } from '../src/controller/stats.js';

const arrayObjLinks = [{
  href: 'https://www.google.com/',
  text: 'https://www.google.com/',
  file:
      'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
},
{
  href: 'http://algo.com/2/3/',
  text: 'http://algo.com/2/3/',
  file:
      'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
},
{
  href: 'https://rpp.pe/',
  text: 'https://rpp.pe/',
  file:
      'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
},
{
  href: 'http://mediadiscovyyyyyyyyery.net',
  text: 'http://mediadiscovyyyyyyyyery.net',
  file:
    'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
}
];

const arrayObjValidate = [{
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
}];

describe('totalAndUniqueLinks', () => {
  it('debería retornar el total de links y links unicos', () => {
    expect(totalAndUniqueLinks(arrayObjLinks)).toEqual({totalLinks: 4, uniqLinks: 4});
  });
});

describe('linksBroken', () => {
  it('debería retornar el total de links rotos', () => {
    expect(linksBroken(arrayObjValidate)).toEqual({broken: 2});
  });
});

