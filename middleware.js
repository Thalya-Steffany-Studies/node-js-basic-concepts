import express from 'express';

const app = express();

app.use((request, response, next) => {
    // conteúdo intermediário
    next()
})

app.use(express.json())

//endpoint
app.get('/users', () => {
    
})

app.listen(9090)