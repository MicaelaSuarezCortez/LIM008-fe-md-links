import { existPath, validatePathAbsolute, convertPathToAbsolute, validateFile, validateFileMd, saveFileMdWithPath } from '../src/controller/path.js';

const input = 'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba';
const output = ['C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md',
  'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file2.md',
  'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\pruebaHijo\\file.md',
  'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\pruebaHijo\\file2.md',
  'C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\pruebaHijo\\pruebaNieto\\file.md'];

describe('saveFileMdWithPath', () => {
  it('debería guardar la ruta de archivos .md', () =>
    expect(saveFileMdWithPath(input)).toEqual(output));
});

describe('existPath', () => {
  it('debería devolver true si ruta existe', () =>
    expect(existPath('C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\src\\controller\\path.js')).toBe(true));
});

describe('validatePathAbsolute', () => {
  it('debería devolver true si la ruta es absoluta', () =>
    expect(validatePathAbsolute('C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md')).toBe(true));
  it('debería devolver false si la ruta es relativa', () =>
    expect(validatePathAbsolute('..\\carpeta1\\carpeta11\\musica.js')).toBe(false));
});

describe('convertPathToAbsolute', () => {
  it('debería convertir ruta relativa a absoluta', () =>
    expect(convertPathToAbsolute('./src/controller/path.js')).toBe('C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\src\\controller\\path.js'));
});

describe('validateFile', () => {
  it('debería devolver true si es archivo', () =>
    expect(validateFile('./src/controller/path.js')).toBe(true));
  it('debería devolver false si es directorio', () =>
    expect(validateFile('./src/controller/')).toBe(false));
});

describe('validateFileMd', () => {
  it('debería devolver extension del archivo', () =>
    expect(validateFileMd('file.md')).toBe(true));
});


