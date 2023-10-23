import fs from "fs";
import path from "path"

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.readdir(path.join(__dirname, 'exercicios'), (error, files) => {
    if (error) return console.log(error);
    
    console.log(files)
})