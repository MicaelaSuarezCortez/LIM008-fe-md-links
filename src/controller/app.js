const fs = require('fs');

const readFile = (paths) => fs.readFileSync(paths);
console.log(readFile('E:\\prueba\\file.md', 'utf8'));


