const url = require('url');
const fs = require('fs');
const path = require('path');
// const qs = require('querystring');
// const formidable = require('formidable');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json')

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname === '/cats/add-cat' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));
        let index = fs.createReadStream(filePath);

        index.on('data', (data) => {
            let catBreedPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace("{{catBreeds}}", catBreedPlaceholder);
            res.write(modifiedData);
        });

        index.on('end', () => {
            res.end();
        });

        index.on('err', (err) => {
            console.log(err);
        });

    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));
        let catBreeds = fs.createReadStream(filePath);
        catBreeds.on('data', (data) => {
            res.write(data);
            
            // catBreeds.pipe(res);
        });
        catBreeds.on('end', () => {
            res.end();
        });

        catBreeds.on('err', (err) => {
            console.log(err);
        });
    } else {
        return true;
    }
}