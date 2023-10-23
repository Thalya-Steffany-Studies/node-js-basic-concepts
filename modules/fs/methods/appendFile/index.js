import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFile = path.join(__dirname.replace('appendFile', 'writeFile'), 'created-with-write-file.js')
const aditionalContent = `
//I'm a new content added a previously created file
`
;

fs.appendFile(pathFile, aditionalContent, { encoding: 'utf-8' }, (error => {
    if(error) return console.log(error);
    console.log('Conteúdo adicionado com sucesso! :D');
}))