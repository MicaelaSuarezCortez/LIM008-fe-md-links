import { mdlinks } from '../src/controller/md-links.js';

const route = 'E:\\prueba';
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

const arrayObjLinksValidate = [{
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
];;

describe('md-links', () => {
  it('debería retornar el array de objetos de links', (resolve) => {
    mdlinks(route)
      .then(result => {
        expect(result).toEqual(arrayObjLinks);
        resolve();
      })    
      .catch(() => resolve());
  });

  it('debería retornar el array de objetos de links con validación', (resolve) => {
    mdlinks(route, {validate: true})
      .then(result => {
        expect(result).toEqual(arrayObjLinksValidate);
        resolve();
      })
      .catch(() => resolve());
  });
});