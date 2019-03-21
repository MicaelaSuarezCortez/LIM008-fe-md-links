// Create reference instance
const myMarked = require('marked');
const fs = require('fs');

export const extractContentFileMd = (path) => {
  let arrayContentLinks = [];
  path.forEach(element => {
    const readContentFile = fs.readFileSync(element, 'utf8');
    // Get reference
    const renderer = new myMarked.Renderer();// llamando a myMarked con método Renderer
    renderer.link = (href, title, text) => {
      arrayContentLinks.push({href, text: text.substring(0, 50), file: element}); // push en formato objeto
    };
    myMarked(readContentFile, {renderer}); // renderiza a texto plano
  });
  return arrayContentLinks;
};
// console.log(extractContentFileMd(['C:\\Users\\Micaela\\projectsLaboratoria\\LIM008-fe-md-links\\test\\prueba\\file.md']));

// marked(markdownString [,options] [,callback])
/* markdownString: String of markdown source to be compiled.
   Hash of options. Can also use marked.setOptions
   Called when markdownString has been parsed. Can be used as second argument if no options present.
*/