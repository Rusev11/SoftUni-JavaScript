require('dotenv').config()
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const configExpress = require('./config/express');
const indexRoutes = require('./controllers/routes');
const authRouter = require('./controllers/authRouter');
const cubeRouter = require ('./controllers/cubeRouter');
const accessoryRouter = require ('./controllers/accessoryRouter');

console.log(config.databaseUrlTest)
configExpress(app);
indexRoutes(app);
cubeRouter(app);
accessoryRouter(app);
authRouter(app);

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) {    
        console.log(error);
        throw error;
    }
    console.log('Database is setup end running');
})
app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));