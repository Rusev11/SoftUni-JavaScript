const config = require('./config/config');
const connectDB = require('./config/database');
const express = require('express')
const app = express();
const configExpress = require('./config/express');
const configRoutes = require('./config/routes');

connectDB();

configExpress(app);
configRoutes(app);

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(config.port, console.log(`Listening on port ${config.port}!`))

