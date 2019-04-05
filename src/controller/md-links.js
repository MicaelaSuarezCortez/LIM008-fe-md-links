import {validatePathAbsolute, convertPathToAbsolute, saveFileMdWithPath } from '../controller/path.js';
import {extractContentFileMd } from '../controller/content-file.js';
import {validateLinks} from '../controller/validate-link.js';

export const mdlinks = (path, options) => new Promise((resolve) => {   
  const validaPath = validatePathAbsolute(path);  
  let route = path;
  if (validaPath === false) {
    route = convertPathToAbsolute(path);    
  }
  const arrayPathFileMD = saveFileMdWithPath(route); // guardar la ruta de archivos .md 
  const arrayLinks = extractContentFileMd(arrayPathFileMD); // extrae el contenido de los archivos .md 
  if (options.validate === true) {
    validateLinks(arrayLinks) // retorna array de objetos link con status y statusText
      .then(response => resolve(response));      
  } else {
    resolve(arrayLinks);
  }
});
// md-links retorna una promesa
// mdlinks('test\\prueba', {validate: true}) .then(res => console.log(res));