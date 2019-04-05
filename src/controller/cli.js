import { mdlinks } from '../controller/md-links.js'; // retorna array de objetos links, array de objetos links con validación
import { statsLinks, totalAndUniqueLinks, linksBroken } from '../controller/stats.js'; // retorna estadística de links total y únicos, así como los links rotos


const path = process.argv;
const pathFile = path;

export const cli = (pathFile, option) => {
  // console.log(pathFile);
  if (pathFile.includes('--validate') && pathFile.includes('--stats')) {
    const optionValidate = {validate: true};
    option = optionValidate;
    const promesaMDLinksStats = mdlinks(pathFile[2], option)
      .then((res2) => (statsLinks(res2, true)));  
    return promesaMDLinksStats;
  }
  if (pathFile.includes('--validate')) {
    const optionValidate = { validate: true };
    option = optionValidate;
    const links = mdlinks(pathFile[2], option);
    //   .then(res => console.log(res))
    //  console.log(links)
    return links;
  }
  if (pathFile.includes('--stats')) {
    const optionValidate = { validate: false };
    option = optionValidate;
    const links2 = mdlinks(pathFile[2], option)
      .then(res1 => totalAndUniqueLinks(res1)); // retorna un objeto        
    return links2; 
  } else {
    const optionValidate = { validate: false };
    option = optionValidate;
    const links2 = mdlinks(pathFile[2], option); // hasta aquí no se si devolverá el array de objetos links, es una promesa pendiente.
    // .then(result => console.log(result));
    // console.log(links2);
    return links2;
  }
};
// console.log(cli(pathFile));
cli(pathFile, { validate: false })
  .then(res => console.log(res)); // Aquí se muestra el array de Objetos links si se cumple la promesa: No sé si la promesa se cumplirá. 

