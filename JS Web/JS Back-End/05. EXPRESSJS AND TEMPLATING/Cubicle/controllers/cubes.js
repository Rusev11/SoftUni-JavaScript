const fs = require('fs');
const { getCubes } = require('./database');


const getAllCubes = (callback) => {
    getCubes((cubes) => {
        callback(cubes);
    });
};
// console.log(getCubes());
module.exports = { 
    getAllCubes 
};