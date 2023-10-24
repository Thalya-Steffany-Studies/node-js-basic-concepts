import http from "http";

const port = 8080;

const server = http.createServer((request, response) => {
    switch (request.url) {
        case "/home":
            response.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" })
            response.end("<h1>Olá, mundo!</h1>");
            break;
        
        case "/users":
            const users = [
                { id: 1, name: "Thalya", lastName: "Alonso" },
                { id: 2, name: "Fernando", lastName: "Cunha" },
            ];

            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(users));
            break;
    }
});

server.listen(port, () => {
    console.log(`Servidor inicalizado na porta ${port}`)
})