const jwt = require('jsonwebtoken');

const privateKey = '1234'

function authAccess(req, res, next) {
    let token = req.cookies['aid'];
    let decodedObject = jwt.decode(token, privateKey);
    if (decodedObject) {
        next();
    } else {
        res.redirect('/');
    }
}

function authAccessJSON(req, res, next) {
    let token = req.cookies['aid'];
    let decodedObject = jwt.decode(token, privateKey);
    if (decodedObject) {
        next();
    } else {
        res.redirect('/');
    }
}

function guestAccess (req, res, next){
    let token = req.cookies['aid'];
    let decodedObject = jwt.decode(token, privateKey);
    if (decodedObject) {
        res.redirect('/');
    } else {
        next();
    }
}

function getUserStatus (req, res, next){
    let token = req.cookies['aid'];
    let decodedObject = jwt.decode(token, privateKey);
    if (decodedObject) {
        req.isLoggedIn = true;
    } else {
        req.isLoggedIn = false;
    }
    next();
}

module.exports = {
    authAccess,
    guestAccess,
    getUserStatus,
    authAccessJSON
};