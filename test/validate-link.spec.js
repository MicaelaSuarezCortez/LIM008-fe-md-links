import { validateLinks } from '../src/controller/validate-link.js';

const arrayObjLink = [{
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
}
];

describe('validateLinks', () => {
  it('debería retornar un array de objetos', (resolve) => {
    validateLinks(arrayObjLink)
      .then(result => {
        expect(result).toEqual(arrayObjValidate);
        resolve();
      }).catch(() => resolve());
  });
});
