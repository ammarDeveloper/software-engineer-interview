const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/json',
        });
        res.end('Home page');
    } else if (url === '/api') {
        res.writeHead(200, {
            'content-type': 'application/json',
        });
        res.end(JSON.stringify({ message: 'Api endpoint', status: 'active' }));
    } else {
        res.writeHead(500);
        res.end('Something went wrong')
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});