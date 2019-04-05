#!/usr/bin/env node

const [,, ...args] = process.argv;

import { mdlinks } from '../controller/md-links.js'; 
import { statsLinks, totalAndUniqueLinks} from '../controller/stats.js'; 

const path = process.argv;
const pathFile = path;

export const cli = (pathFile, option) => {         
  if (pathFile.includes('--validate') && pathFile.includes('--stats')) {
    const optionValidate = {validate: true};
    option = optionValidate;
    const promesaMDLinksStats = mdlinks(pathFile[2], option)
      .then((result) => (statsLinks(result, true)));  
    return promesaMDLinksStats;
  }
  if (pathFile.includes('--validate')) {
    const optionValidate = { validate: true };
    option = optionValidate;
    const links = mdlinks(pathFile[2], option);
    return links;
  }
  if (pathFile.includes('--stats')) {
    const optionValidate = { validate: false };
    option = optionValidate;
    const links2 = mdlinks(pathFile[2], option)
      .then(result => totalAndUniqueLinks(result));       
    return links2; 
  } else {
    const optionValidate = { validate: false };
    option = optionValidate;
    const links2 = mdlinks(pathFile[2], option);    
    return links2;
  }
};

cli(pathFile, { validate: false })
  .then(result => console.log(result)); 

