import { validateLinks } from '../src/controller/validate-link.js';

const input = [{
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
}];

test('Debería retornar un array de objetos con la propiedad status y statustext', (done) => {
  validateLinks(input)
    .then((result) => {
      expect(result).toEqual(output);
      done();
    });
});

