const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.headers);
    console.log(request.method);
    console.log(request.url);

    const user = {
        name: 'jhon',
        hobby: 'skating'
    }

    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hellooooo!!!</h1>');

    /*  response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(user)); */
});

server.listen(3000);