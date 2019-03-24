import { extractContentFileMd } from '../src/controller/content-file.js';

const input = ['C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'];
const output = [{
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

describe('extractContentFileMd', () => {
  it('debería poder extraer el contenido y retornar array de objetos de links', () => {
    expect(extractContentFileMd(input)).toEqual(output);
  });
});

