const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const config = require('./config/config')[env];
const express = require('express');
const app = express();
const configExpress = require ('./config/express');
const configRoutes = require ('./config/routes');

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(error)=>{
    if (error){
        console.log(error);
        throw error;
    }
    console.log ('Database is setup end running');
})

configExpress(app);
configRoutes(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));