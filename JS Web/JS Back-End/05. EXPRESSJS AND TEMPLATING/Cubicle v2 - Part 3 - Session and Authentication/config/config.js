const database = require("../controllers/database");
// const dotevn = require('dotenv');

// dotenv.config({ path: 'ENV_FILENAME' });
module.exports = {
    development: {
        port: 5000,
        privateKey: process.env.PRIVATE_KEY,
        databaseUrl: process.env.DATABASE_URL,
        databaseUrlTest: process.env.DATABASE_URL

        
    },
    production: {}
};  