const {getCubes} = require('./database');
const {getUserStatus} = require('../controllers/authentication');
const Cube = require('../models/cubeModel');
const Accessory = require('../models/accessoryModel');

module.exports = (app) => {
    app.get('/', getUserStatus, (req, res) => {
        getCubes((cubes) => {
            res.render('index', {
                title: 'Cube Workshop',
                cubes: cubes,
                isLoggedIn: req.isLoggedIn
            });
        });
    });

    app.get('/about',getUserStatus, (req, res) => {
        res.render('about',{
            isLoggedIn: req.isLoggedIn
        });
    });
};