const express = require('express');
const router = express.Router();
const Cubes = require('../models/cubeModel');


router.get('/all', (req, res) => {
    Cubes.find((error, data)=>{
        if(error){
            console.log(error);
            throw error;
        }
        res.status(200).json({
            data
        })
    })
});

router.post('/new', (req, res)=>{
    const {
        name,
        description
    } = req.body
    res.status(201).json({
        message: `Cube ${name} is successfully created`
    })
})

module.exports = router;