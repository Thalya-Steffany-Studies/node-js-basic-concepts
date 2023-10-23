import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathNewFile = path.join(__dirname, 'created-with-write-file.js')
const content = 'console.log("I was created with writeFile method! xD")';

fs.writeFile(pathNewFile, content, { encoding: 'utf-8' }, (error) => {
    if (error) return console.log(error);
    console.log('Arquivo criado com sucesso!')
});