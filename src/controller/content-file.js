// Create reference instance
const myMarked = require('marked');
const fs = require('fs');

export const extractContentFileMd = (path) => {
  let arrayContentLinks = [];
  path.forEach(element => {
    const readContentFile = fs.readFileSync(element, 'utf8'); // lee el contenido del file
    // Get reference
    const renderer = new myMarked.Renderer();// llamando a myMarked con método Renderer
    renderer.link = (href, title, text) => {
      arrayContentLinks.push({href, text: text.substring(0, 50), file: element}); // push en formato objeto
    };
    myMarked(readContentFile, {renderer}); // renderiza a texto plano
  });
  return arrayContentLinks;
};
