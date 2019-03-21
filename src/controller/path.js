const path = require('path');
const fs = require('fs');

export const existPath = paths => fs.existsSync(paths);
export const validatePathAbsolute = paths => path.isAbsolute(paths);
export const convertPathToAbsolute = paths => path.resolve(paths);
export const validateFile = file => fs.lstatSync(file).isFile();
export const validateDirectory = directory => fs.lstatSync(directory).isDirectory();
export const validateFileMd = paths => path.extname(paths) === '.md';

export const saveFileMdWithPath = pathAbsolute => {
  let arrayPath = [];
  const files = fs.readdirSync(pathAbsolute); // retorna un array que contiene los nombres de files
  files.forEach(element => {
    let filePath = path.join(pathAbsolute, element);
    if (validateFile(filePath) && validateFileMd(filePath)) {
      arrayPath.push(filePath);
    } else if (validateDirectory(filePath)) {
      arrayPath = arrayPath.concat(saveFileMdWithPath(filePath));
    }
  });
  return arrayPath;
};
// console.log(saveFileMdWithPath('E:\\prueba'));
