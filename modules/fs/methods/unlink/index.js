import path from 'path';
import fs from 'fs';

const absolutePath = path.join(process.cwd(), "/modules/fs/constants.js");

fs.unlink(absolutePath, (error) => {
    if (error) return console.log(error);
    console.log('Arquivo removido com sucesso!')
})