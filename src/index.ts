import * as http from 'node:http'

const handler = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.end("Hello World")
}

const server = http.createServer(handler)

server.listen(8000)