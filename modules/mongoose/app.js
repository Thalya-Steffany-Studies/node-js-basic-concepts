import dotenv from "dotenv";
import express from 'express';
import { connectToDatabase } from "./database/connect.js";
import { UserModel } from "./models/index.js";

dotenv.config();
connectToDatabase();

const app = express();
app.use(express.json());


//request -> informações enviadas do client para o server
//response -> resposta do server para o client
app.post('/users', async (request, response) => {
    try {
        const user = await UserModel.create(request.body);
        response.status(201).json(user);

    } catch(error) {
        response.status(500).send(error.message);
    } 
});

app.get('/users', async (request, response) => {
    try {
        const users = await UserModel.find({});
        response.status(200).json(users);

    } catch(error) {
        response.status(500).send(error.message)
    }
});

app.get('/users/:id', async (request, response) => {
    try {
        const user = await UserModel.findById(request.params.id);
        response.status(200).json(user);

    } catch(error) {
        response.status(500).send(error);
    }
});

app.patch('/users/:id', async (request, response) => {
    try {
        const user = await UserModel.findByIdAndUpdate(request.params.id, request.body, { new: true });     
        response.status(200).json(user);

    } catch(error) {
        response.status(500).send(error)
    }
});

app.delete('/users/:id', async (request, response) => {
    
    try {
        const user = await UserModel.findByIdAndRemove(request.params.id);
        response.status(200).json(user);

    } catch(error) {
        response.status(500).send(error)
    }
});

app.listen(5050);