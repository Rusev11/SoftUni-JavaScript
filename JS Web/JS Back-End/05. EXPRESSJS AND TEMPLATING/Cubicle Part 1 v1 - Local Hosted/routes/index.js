// TODO: Require Controllers...
const { Router } = require('express');
const router = Router();
const { getCubes, saveCube } = require('../controllers/database.js');
const { getCube } = require('../controllers/database.js');
const Cube = require('../models/cube');

router.get('/', (req, res) => {
    getCubes((cubes) => {
        res.render('index', {
            title: 'Cube Workshop',
            cubes: cubes
        });

    })
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About | Cube Workshop'
    });
});

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Cube | Cube Workshop'
    });
});

router.post('/create', (req, res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel
    } = req.body
    const newCube = new Cube (name, description, imageUrl, difficultyLevel);
    newCube.save(()=>{
        res.redirect('/');
    })
});

router.get('/details/:id', (req, res) => {
    getCube (req.params.id, (cube) =>{
        res.render('details', {
            title: 'Details | Cube Workshop',
            ...cube
        });
    });
});

router.get('*', (req, res) => {
    res.render('404', {
        title: 'Error | Cube Workshop'
    });
});

module.exports = router;