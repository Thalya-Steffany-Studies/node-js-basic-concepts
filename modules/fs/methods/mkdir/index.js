import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathNewDirectories = path.join(__dirname, 'created-with-fs-mkdir', 'sub-directory')

fs.mkdir(pathNewDirectories, { recursive: true } ,(error) => {
    if (error) return console.log(error);
    console.log('Diretório criado com sucesso!')
});