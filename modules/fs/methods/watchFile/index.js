import fs from 'fs';
import path from 'path';

const absolutePath  = path.join(process.cwd(), `modules/fs/methods/watchFile/renamed-watched-file.js`);
console.log('Current working directory: ',process.cwd())

fs.watchFile(absolutePath, (current, previous) => {
    console.log(`
     Horário da alteração atual: ${current.mtime}
    .Horário da alteração alteração anterior: ${previous.mtime}
    `)
})