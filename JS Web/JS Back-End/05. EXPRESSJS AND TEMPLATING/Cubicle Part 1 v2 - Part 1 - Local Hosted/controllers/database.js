const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'config/database.json');


function getCubes(callback) {
    fs.readFile(filePath, (error, data) => {
        if (error) {
            throw error;
        }
        cubes = JSON.parse(data);
        console.log('Cubes successfuly read from DB');
        callback(cubes);
    })
}

function saveCubes(cubes,callback) {
    fs.writeFile(filePath, JSON.stringify(cubes),(error)=>{
        if(error){
            throw error;
        }
        console.log('Cubes successfully saved in DB');
        callback();
    })
}

function saveCube(cube, callback){
    getCubes((cubes)=>{
        cubes.push(cube);
        saveCubes(cubes, callback);
    });
}

function getCube(id, callback) {
    getCubes((cubes) => {
       let currentCube = cubes.filter((cube) => cube.id === id)[0];
       callback(currentCube);
    })
};

module.exports = {
    saveCube,
    saveCubes,
    getCubes,
    getCube
}