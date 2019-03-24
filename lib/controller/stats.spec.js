"use strict";

var _stats = require("../controller/stats.js");

const arrayObjLinks = [{
  href: 'https://www.google.com/',
  text: 'https://www.google.com/',
  file: 'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
}, {
  href: 'http://algo.com/2/3/',
  text: 'http://algo.com/2/3/',
  file: 'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
}, {
  href: 'https://rpp.pe/',
  text: 'https://rpp.pe/',
  file: 'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md'
}];
const arrayObjValidate = [{
  href: 'https://www.google.com/',
  text: 'https://www.google.com/',
  file: 'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md',
  status: 200,
  statusText: 'OK'
}, {
  href: 'http://algo.com/2/3/',
  text: 'http://algo.com/2/3/',
  file: 'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md',
  status: 404,
  statusText: 'Fail'
}, {
  href: 'https://rpp.pe/',
  text: 'https://rpp.pe/',
  file: 'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md',
  status: 200,
  statusText: 'OK'
}];
describe('totalAndUniqueLinks', () => {
  it('debería retornar el total de links y links unicos', () => {
    expect((0, _stats.totalAndUniqueLinks)(arrayObjLinks)).toEqual({
      totalLinks: 3,
      uniqLinks: 3
    });
  });
});
describe('linksBroken', () => {
  it('debería retornar el total de links rotos', () => {
    expect((0, _stats.linksBroken)(arrayObjValidate)).toEqual({
      broken: 1
    });
  });
});