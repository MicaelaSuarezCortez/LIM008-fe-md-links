const myMarked = require('marked');
const fs = require('fs');

export const extractContentFileMd = (path) => {
  let arrayContentLinks = [];
  path.forEach(element => {
    const readContentFile = fs.readFileSync(element, 'utf8'); 
   
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {
      arrayContentLinks.push({href, text: text.substring(0, 50), file: element}); 
    };
    myMarked(readContentFile, {renderer}); 
  });
  return arrayContentLinks;
};
