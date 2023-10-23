import path from 'path';
import fs from 'fs';

const oldPath = path.join(process.cwd(), "modules/fs/methods/mkdir/created-with-fs-mkdir");
const newPath = path.join(process.cwd(), "modules/fs/methods/mkdir/created-with-fs-mkdir-and-renamed-with-rename");

const oldFilePath  = path.join(process.cwd(), `modules/teste/hello-world.txt`);
const newFilePath  = path.join(process.cwd(), `modules/teste/renamed-hello-world.txt`);

fs.rename(oldPath, newPath, (error) => {
    if (error) return console.log(error);
    console.log('Diretório renomeado com sucesso!');
});


fs.rename(oldFilePath, newFilePath, (error) => {
    if (error) return console.log(error);
    console.log('Arquivo renomeado com sucesso!');
})