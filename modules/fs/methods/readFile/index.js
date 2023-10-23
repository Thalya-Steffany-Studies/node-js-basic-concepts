import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFile = path.join(__dirname.replace('readFile', 'writeFile'), 'created-with-write-file.js')

fs.readFile(pathFile, { encoding: 'utf-8' }, (error, data) => {
    if (error) return console.log(error);
    console.log(data);
});