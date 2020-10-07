const http = require('http');
const port = 5000;
const handlers = require("./handlers");

http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'text/plain'
    // });
    // res.write('Hello JS WORLD!');
    console.log(req.url);
    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }


}).listen(port, error => {
    if (error) {
        console.log(error);
    }
    console.log(`Listening on port ${port}`);
});