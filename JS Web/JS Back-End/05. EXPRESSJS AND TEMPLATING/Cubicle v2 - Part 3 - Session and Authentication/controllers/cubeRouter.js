
const {saveCube, getCurrentAccessoriesForDetailsPage, deleteCube } = require('./database');
const {authAccess, getUserStatus, authAccessJSON} = require('../controllers/authentication');
const Cube = require('../models/cubeModel');
const Accessory = require('../models/accessoryModel');
const jwt = require('jsonwebtoken');

const privateKey = '1234';

function cubeEditDelete(app) {
    app.get('/delete',authAccess, (req, res) => {
        res.render('deleteCubePage', {
            isLoggedIn: req.isLoggedIn
        })
    });

    app.get('/edit', authAccess, (req, res) => {
        res.render('editCubePage', {
            isLoggedIn: req.isLoggedIn
        })
    });



    app.get('/details/:id', (req, res) => {
        let currentCubeId = req.params.id;
        getCurrentAccessoriesForDetailsPage(currentCubeId, (accessories, currentCube) => {
            res.render('details', {
                title: 'Details | Cube Workshop',
                accessories: accessories,
                currentCube,
                hasAccessories: accessories.length > 0,
                isLoggedIn: req.isLoggedIn
            });
        });
    })

    app.get('/delete/:id', (req, res) => {
        let currentCubeId = req.params.id;
        deleteCube(currentCubeId, () => {
            res.redirect('/');
        })
    })

    app.get('/create',getUserStatus, authAccess, (req, res) => {
        res.render('create', {
            isLoggedIn: req.isLoggedIn
        });
    });

    app.post('/create', authAccessJSON, (req, res) => {
        let {
            name,
            description,
            imageUrl,
            difficultyLevel
        } = req.body;
        let token = req.cookies['aid'];
        let decodedObject = jwt.verify(token, privateKey);
        console.log(decodedObject);
        let newCube = new Cube({ name, description, imageUrl, difficulty: difficultyLevel, creatirId: decodedObject._id });
        saveCube(newCube, () => {
            res.redirect('/');
        });
    });
}

module.exports = cubeEditDelete;