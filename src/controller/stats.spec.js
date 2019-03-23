import { statsLinks } from '../controller/stats.js';

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
}];

describe('statsLinks', () => {
  it('debería retornar el total de links y links unicos', () => {
    expect(statsLinks(arrayObjLinks)).toEqual({totalLinks: 3, uniqLinks: 3});
  });
});
