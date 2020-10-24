const cubeRouter = require('./routes/cube.js')
const express = require('express');
const app = express();
const connectDB = require('./config/database')


connectDB();
app.use(express.json());
app.use('/cube', cubeRouter);

app.listen(5000, (error) => {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('Rest API is running on port 5000');
});