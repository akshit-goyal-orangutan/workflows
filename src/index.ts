import * as http from 'node:http';

const handler = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.end("Hello World");
};

const server = http.createServer(handler);

console.log("Checkout http://localhost:8000");
server.listen(8000);