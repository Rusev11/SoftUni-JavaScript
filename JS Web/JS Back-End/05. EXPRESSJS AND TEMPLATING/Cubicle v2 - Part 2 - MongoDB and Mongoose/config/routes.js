const { getCubes, getCube, saveCube, saveAccessory, getCurrentAccessories, updateCube, getCurrentAccessoriesForDetailsPage, deleteCube} = require('../controllers/database');
const Cube = require('../models/cubeModel');
const Accessory = require('../models/accessoryModel');

module.exports = (app) => {
    app.get('/', (req, res) => {
        getCubes((cubes) => {
            res.render('index', {
                title: 'Cube Workshop',
                cubes: cubes
            });
        });
    });

    // app.get('/details/:id', (req, res) => {
    //     let currentCubeId = req.params.id;
    //     getCube(currentCubeId, (currentCube) => {
    //         getCurrentAccessoriesForDetailsPage()
    //         res.render('details', {
    //             title: 'Details | Cube Workshop',
    //             accessories: currentCube.accessories,
    //             currentCube
    //         });
    //     });
    // })

    app.get('/details/:id', (req, res) => {
        let currentCubeId = req.params.id;
        getCurrentAccessoriesForDetailsPage(currentCubeId, (accessories, currentCube) => {
            res.render('details', {
                title: 'Details | Cube Workshop',
                accessories: accessories,
                currentCube,
                hasAccessories: accessories.length > 0
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
        let newCube = new Cube({ name, description, imageUrl, difficulty: difficultyLevel });
        saveCube(newCube, () => {
            res.redirect('/');
        });
    });

    app.get('/create/accessory', (req, res) => {
        res.render('createAccessory', {
            title: 'Create Accessory'
        });
    });

    app.post('/create/accessory', (req, res) => {
        let {
            name,
            description,
            imageUrl
        } = req.body;
        let newAccessory = new Accessory({ name, description, imageUrl });
        saveAccessory(newAccessory, () => {
            res.redirect('/create/accessory');
        })
    });

    app.get('/attach/accessory/:id', (req, res) => {
        let currentCubeId = req.params.id;
        getCurrentAccessories(currentCubeId, (accessories, currentCube) => {
            res.render('attachAccessory', {
                title: 'Attach Accessory',
                accessories: accessories,
                currentCube,
                canAttachAccessories: (accessories.length === 0 && currentCube.accessories !== 0)
            });
        });
    });

    app.post('/attach/accessory/:id', (req, res) => {
        let newAccessory = req.body.accessory;
        let currentId = req.params.id;
        getCube(currentId, (cube) => {
            updateCube(cube, newAccessory, () => {
                res.redirect(`/details/${currentId}`);
            });
        });
    });

    app.get('/delete/:id', (req, res) => {
        let currentCubeId = req.params.id;
        deleteCube(currentCubeId, () => {
            res.redirect('/');
        })
    })

    app.get('*', (req, res) => {
        res.render('404');
    });

};