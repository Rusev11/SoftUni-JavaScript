
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'config/database.json');
const Cube = require('../models/cubeModel');
const Accessory = require('../models/accessoryModel');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { resolve } = require('path');

const privateKey = '1234';

function generateToken(data) {
    return jwt.sign(data, privateKey);
}


function getCubes(callback) {
    Cube.find((error, cubes) => {
        if (error) {
            console.log(error);
            throw error;
        }
        callback(cubes);
    }).lean();
}

function saveCube(cube, callback) {
    cube.save((error) => {
        if (error) {
            console.log(error);
            throw error;
        };
        callback();
    });
};

function getCube(id, callback) {
    Cube.findById(id, (error, cube) => {
        if (error) {
            console.log(error);
            throw error;
        }
        callback(cube);
    }).lean();
};

function saveAccessory(newAccessory, callback) {
    newAccessory.save((error) => {
        if (error) {
            console.log(error);
            throw error;
        }
        callback();
    })
}

function getAllAccessories(callback) {
    Accessory.find((error, allAccessories) => {
        if (error) {
            console.log(error);
            throw error;
        }
        callback(allAccessories);
    }).lean();
}

function updateCube(cubeID, accessoryID, callback) {
    Cube.findByIdAndUpdate(cubeID, {
        $addToSet: {
            accessories: [accessoryID]
        }
    }, () => {
        callback();
    })
}

function getCurrentAccessories(cubeID, callback) {
    getCube(cubeID, (currentCube) => {
        getAllAccessories((allAccessories) => {
            let accessories = [];
            for (let i = 0; i < allAccessories.length; i++) {
                let hasCurrentAccessory = false;
                currentCube.accessories.forEach(el => {
                    if (allAccessories[i]._id.toString() === el.toString()) {
                        hasCurrentAccessory = true;
                    };
                });
                if (!hasCurrentAccessory) {
                    accessories.push(allAccessories[i]);
                }
            }
            callback(accessories, currentCube);
        });
    });
}

function getCurrentAccessoriesForDetailsPage(cubeID, callback) {
    getCube(cubeID, (currentCube) => {
        let accessories = [];
        Accessory.find((error, allAccessories) => {
            if (error) {
                console.log(error);
                throw error;
            };
            currentCube.accessories.forEach(el => {
                for (let accessory of allAccessories) {
                    if (el.toString() === accessory._id.toString()) {
                        accessories.push(accessory);
                        break;
                    };
                };
            });
            callback(accessories, currentCube);
        }).lean();
    });
}

function deleteCube(cubeID, callback) {
    Cube.deleteOne({ _id: cubeID }, (error) => {
        if (error) {
            console.log(error);
            throw error;
        }
        callback();
    })
}

function saveUser(req, res, callback) {
    const {
        username,
        password
    } = req.body;

    //hashing
    bcrypt.genSalt(10, (error, salt) => {
        if (error) {
            console.log(error);
            throw error;
        }
        bcrypt.hash(password, salt, (error, hashedPassword) => {
            if (error) {
                console.log(error);
                throw error;
            }
            const user = new User({
                username,
                password: hashedPassword
            });

            user.save((error, userObject) => {
                if (error) {
                    console.log(error);
                    throw error;
                }
                let token = generateToken({
                    userID: userObject._id,
                    username: userObject.username
                });

                res.cookie('aid', token);

                callback();
            })
        })
    })
}

function verifyUser(req, res, callback) {
    const {
        username,
        password
    } = req.body;

    User.findOne({ username }, (error, userObject) => {
        if (error) {
            console.log(error);
            throw error;
        }
        bcrypt.compare(password, userObject.password, (error, result) => {
            if (error) {
                console.log(error);
                throw error;
            }
            
            if (result) {
                let token = generateToken({
                    userID: userObject._id,
                    username: userObject.username
                });
                res.cookie('aid', token);
            }
            callback();
        });
    })
}


module.exports = {
    saveCube,
    getCubes,
    getCube,
    saveAccessory,
    getCurrentAccessories,
    updateCube,
    getCurrentAccessoriesForDetailsPage,
    deleteCube,
    saveUser,
    verifyUser
}