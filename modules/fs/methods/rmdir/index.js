import path from 'path';
import fs from 'fs';

const absolutePath = path.join(process.cwd(), "/modules/fs/methods/test-directory");

fs.rmdir(absolutePath, (error) => {
    if (error) return console.log(error);
    console.log('Diretório excluído com sucesso!')
});