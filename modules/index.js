const path = require('path');
const fs = require('fs');

//criar uma pasta
    //método mkdir -> arg -> path da pasta -> callback ->
    //que será executada após a tentativa de criação da pasta
    //para construir o path, posso fazer uso do módulo path

//o Path passado para o mkdir deve ser completo, ele é global
//não leva em consideração o local onde estamos o método na hora de criar o arquivo

const caminhoParaNvPast = path.join(__dirname, '/exercicio1');

fs.mkdir(caminhoParaNvPast, (error) => {
    if (error) return console.error(error)
    else console.log('Pasta criado com sucesso!')
})


//criar e popular um arquivo
//const caminhoNvArquivo = path.join(, '/hello-word.js')
const caminhoParaNvArquivo = path.join(__dirname, '/exercicio1/hello.js');

fs.writeFile(caminhoParaNvArquivo, "console.log('Olá, mundo!')", (error) => {
    if (error) return console.error(error)
    else console.log('Pasta criado com sucesso!')
})

//Criando uma pasta e arquivo ao mesmo tempo
fs.mkdir(path.join(__dirname, '/exemplo-1'), (error) => {
    if (error) return console.error(error)
    
    fs.writeFile(path.join(__dirname, '/exemplo-1/example.js'), "console.log('segundo exemplo XD');", (error) => {
        if (error) return console.error(error)
        else console.log('Arquivo 2 criado com sucesso')
    })
} )

//editar um arquivo
const filePath = path.join(__dirname, '/exemplo-1/example.js');

fs.readFile(filePath, 'utf-8' ,(error, conteudoArquivo) => {
    if (error) return console.error(error)
    else {
        const novoConteudo = conteudoArquivo + '\tconsole.log("fui editado xd");'

        fs.writeFile(filePath, novoConteudo, 'utf-8', (error) => {
            if (error) return console.error(error)

        })
    }
})