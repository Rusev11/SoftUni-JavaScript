const {getCube, saveAccessory, getCurrentAccessories, updateCube} = require('./database');
const {authAccess, getUserStatus, authAccessJSON} = require('../controllers/authentication');
const Cube = require('../models/cubeModel');
const Accessory = require('../models/accessoryModel');

function accessoryRouter(app) {
    app.get('/create/accessory', getUserStatus, authAccess, (req, res) => {
        res.render('createAccessory', {
            title: 'Create Accessory',
            isLoggedIn: req.isLoggedIn
        });
    });

    app.post('/create/accessory', authAccessJSON, (req, res) => {
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

    app.get('/attach/accessory/:id', getUserStatus, authAccess, (req, res) => {
        let currentCubeId = req.params.id;
        getCurrentAccessories(currentCubeId, (accessories, currentCube) => {
            res.render('attachAccessory', {
                title: 'Attach Accessory',
                accessories: accessories,
                currentCube,
                canAttachAccessories: (accessories.length === 0 && currentCube.accessories !== 0),
                isLoggedIn: req.isLoggedIn
            });
        });
    });

    app.post('/attach/accessory/:id', authAccessJSON, (req, res) => {
        let newAccessory = req.body.accessory;
        let currentId = req.params.id;
        getCube(currentId, (cube) => {
            updateCube(cube, newAccessory, () => {
                res.redirect(`/details/${currentId}`);
            });
        });
    });
}

module.exports = accessoryRouter