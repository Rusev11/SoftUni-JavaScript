const { saveUser, verifyUser} = require('./database');
const {guestAccess,getUserStatus} = require('../controllers/authentication');
const Cube = require('../models/cubeModel');
const Accessory = require('../models/accessoryModel');

function authRouter (app) {

    app.get('/login', guestAccess, getUserStatus, (req, res) => {
        let error = req.query.error ? 'Username or password are not correct': null;
        res.render('loginPage', {
            isLoggedIn: req.isLoggedIn,
            error
        })
    });

    app.post('/login', (req, res) => {
        verifyUser(req, res, (result)=>{
            if(result === 'notFound'){
                res.redirect('/login?error=true');
                return;
            }
            res.redirect('/');
        });
    });

    app.get('/register', guestAccess, getUserStatus, (req, res) => {
        let error = req.query.error ? 'Username or password is not valid': null;
        res.render('registerPage', {
            isLoggedIn: req.isLoggedIn,
            error
        })
    });

    app.post('/register', (req, res) => {
        saveUser(req, res, (error) => {
            if (error) {
                res.redirect('/register?error=true');
                return;
            }
            res.redirect('/');
        });
    });

    app.get('/logout', (req, res) =>{
        res.clearCookie('aid').redirect('/');
    })

    app.get('*', getUserStatus, (req, res) => {
        res.render('404', {
            isLoggedIn: req.isLoggedIn
        });
    });

}

module.exports = authRouter;

