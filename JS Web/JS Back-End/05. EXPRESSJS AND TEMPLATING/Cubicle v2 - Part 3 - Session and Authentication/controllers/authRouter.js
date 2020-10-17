const { saveUser, verifyUser} = require('./database');
const {guestAccess,getUserStatus} = require('../controllers/authentication');
const Cube = require('../models/cubeModel');
const Accessory = require('../models/accessoryModel');

function authRouter (app) {

    app.get('/login', guestAccess, getUserStatus, (req, res) => {
        res.render('loginPage', {
            isLoggedIn: req.isLoggedIn
        })
    });

    app.post('/login', (req, res) => {
        verifyUser(req, res, ()=>{
            res.redirect('/');
        });
    });

    app.get('/register', guestAccess, getUserStatus, (req, res) => {
        res.render('registerPage', {
            isLoggedIn: req.isLoggedIn
        })
    });

    app.post('/register', (req, res) => {
        saveUser(req,res,()=>{
            res.redirect('/');
        });
    });

    app.get('*', getUserStatus, (req, res) => {
        res.render('404', {
            isLoggedIn: req.isLoggedIn
        });
    });

}

module.exports = authRouter;

