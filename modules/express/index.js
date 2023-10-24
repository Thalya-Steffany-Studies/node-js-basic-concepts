import express from "express";

const app = express();
const port = 9000;

app.get("/", (request, response) => {
    response.status(200).send(`<h1>Olá, mundo!</h1>`)
});

app.get("/users", (request, response) => {
    const users = [
        { id: 1, name: "Thalya", lastName: "Alonso" },
        { id: 2, name: "Fernando", lastName: "Cunha" },
    ];

    response.status(200).send(users)
})

app.listen(port)
