const { getCubes, getCube, saveCube } = require('../controllers/database');
const Cube = require('../models/cubeModel');

module.exports = (app) => {
    app.get('/', (req, res) => {
        getCubes((cubes) => {
            res.render('index', {
                title: 'Cube Workshop',
                cubes: cubes
            });
        });
    });

    app.get('/details/:id', (req, res) => {
        let currentId = req.params.id;
        getCube(currentId, (cube) => {
            res.render('details', {
                title: 'Details | Cube Workshop',
                ...cube
            });
        });
    })

    app.get('/about', (req, res) => {
        res.render('about');
    });

    app.get('/create', (req, res) => {
        res.render('create');
    });

    app.post('/create', (req, res) => {
        let {
            name,
            description,
            imageUrl,
            difficultyLevel
        } = req.body;
        console.log(req.body);
        let newCube = new Cube(name, description, imageUrl, difficultyLevel);
        saveCube(newCube, () => {
            res.redirect('/');
        });
    });

    app.get('*', (req, res) => {
        res.render('404');
    });
};