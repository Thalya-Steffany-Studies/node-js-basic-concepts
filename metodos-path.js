const path = require('path');
function printMsg (phrase, content) { console.log(phrase , ': ' , content) }
//console.log(`Nome da extensão: ${path.extname('C:/Desktop/new-file.js')}`)

//printMsg('Infos sobre o arquivo', path.parse(__dirname));
const diretorio = __dirname;
const subDiretorio = '/minha-pasta';
const arquivo = '/index.js';

printMsg('Criando um novo path', path.join(diretorio, subDiretorio, arquivo ))
printMsg('Criando um novo path', path.join(__dirname,'/novo-sub-diretorio', '/ola.js' ))