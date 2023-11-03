const fs = require('fs');
const path = require('path');
const fileInfo = path.parse(__dirname);
console.log(`Filename: ${path.basename(__filename)}`);
console.log(`dirname: ${path.basename(__dirname)}`);
console.log(`extname: ${path.extname(__filename)}`);
console.log('parse:', fileInfo);
console.log(`join: ${path.join(__filename, "testando-join.js")}`);

fs.mkdir(path.join(__dirname, "/teste"), (error) => {})

fs.writeFile(path.join(__dirname, "/teste", "hello-world.txt"),  'olá mundo, meu primeiro arquivo node.', (error) => {})