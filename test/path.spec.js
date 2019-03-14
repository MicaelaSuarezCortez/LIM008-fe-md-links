import { validatePathAbsolute } from '../src/controller/validate-path-absolute.js';
import { convertPathToAbsolute } from '../src/controller/convert-path-to-absolute.js';

describe('validatePathAbsolute', () => {
  it('debería devolver true si la ruta es absoluta', () =>
    expect(validatePathAbsolute('C:\\carpeta1\carpeta11.musica.js')).toBe(true));
  it('debería devolver false si la ruta es relativa', () =>
    expect(validatePathAbsolute('..\carpeta1\carpeta11\musica.js')).toBe(false));
});

describe('convertPathToAbsolute', () => {
  it('debería convertir ruta relativa a absoluta', () => 
    expect(convertPathToAbsolute('./src/controller/validate-path-absolute.js')).toBe('C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\src\\controller\\validate-path-absolute.js'));
});

