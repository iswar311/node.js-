import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Node is running this javascript file!');

});

server.listen(3000, () => console.log('Server is running on port http://localhost:3000'));