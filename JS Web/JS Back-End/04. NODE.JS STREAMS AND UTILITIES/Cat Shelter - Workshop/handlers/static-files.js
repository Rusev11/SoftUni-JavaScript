const url = require('url');
const fs = require('fs');

function getContentType(url) {
    if (url.endsWith('css')) {
        return 'text/css';
    }
    if (url.endsWith('html')) {
        return 'text/html';
    }
    if (url.endsWith('image')) {
        return 'image/png';
    }
    if (url.endsWith('js')) {
        return 'application/javascript';
    }
    if (url.endsWith('ico')) {
        return 'image/svg+xml';
    }
}
module.exports = (req, res) => {
    
    const pathname = url.parse(req.url).pathname;
  
    if (pathname.startsWith('/content') && req.method === 'GET') {
        fs.readFile(`.${pathname}`, (error, data) => {
            if(error){
                console.log(error);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('File was not find');
                res.end();
            }
            res.writeHead(200, {
                'Content-Type': `${getContentType(pathname)}`
            });
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
}