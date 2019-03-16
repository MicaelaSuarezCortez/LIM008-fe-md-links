"use strict";

const myMarked = require('marked');

const fs = require('fs');

const extractContentFileMd = path => {
  let arrayContentLinks = [];
  path.forEach(element => {
    const readContentFile = fs.readFileSync(element, 'utf8');
    const renderer = new myMarked.Renderer();

    renderer.link = (href, title, text) => {
      arrayContentLinks.push({
        href,
        text: text.slice(0, 50),
        file: element
      });
    };

    myMarked(readContentFile, {
      renderer
    });
  });
  return arrayContentLinks;
};

console.log(extractContentFileMd(['E:\\prueba\\file.md', 'E:\\prueba\\file2.md', 'E:\\prueba\\pruebaHijo\\file.md', 'E:\\prueba\\pruebaHijo\\file2.md', 'E:\\prueba\\pruebaHijo\\pruebaNieto\\file.md']));