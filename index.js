const { fstat } = require('fs');
const http = require('http');
const port = 8000;
const fs = require('fs');

function reqHandler(req, res) {
    console.log(req.url);

    res.writeHead(200, { 'content-type': 'text/html' });

    let filepath;
    switch (req.url) {
        case '/':
            filepath = './index.html';
            break;
        default:
            filepath = './404.html';
    }


    fs.readFile(filepath, function (err, data) {
        if (err) {
            return res.end('<h1>Error</h1>');
        }
        return res.end(data);
    })


}

const server = http.createServer(reqHandler);

server.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;

    }

    console.log("Server is running: ", port);
});

