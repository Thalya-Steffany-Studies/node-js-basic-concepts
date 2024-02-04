import express from 'express';
import { UserModel } from "./modules/mongoose/models/index.js"
import { connectToDatabase } from "./modules/mongoose/database/connect.js"
import dotenv from 'dotenv';
dotenv.config();

connectToDatabase()
    .then(() => console.log('Conectado com o banco de dados'))
    .catch(error => console.log('Erro ao conectar com o banco de dados ', error));

const app = express();

app.set('view engine', 'ejs')

app.get('/', async (request, response) => {

    try {
        const users =  await UserModel.find({})
    
        response.render('pages/index', { users, name: "João" })
    } catch(error) {
        response.status(500).send(error)
    }
})

app.get('/about', async (request, response) => {

    try {
        const about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus tortor risus, molestie fringilla dolor hendrerit quis. Mauris faucibus fermentum risus, a molestie nunc tempor a. Maecenas ac nunc turpis.'
    
       response.render('pages/about', { about })
    } catch(error) {
        response.status(500).send(error)
    }
})

app.listen(1020)