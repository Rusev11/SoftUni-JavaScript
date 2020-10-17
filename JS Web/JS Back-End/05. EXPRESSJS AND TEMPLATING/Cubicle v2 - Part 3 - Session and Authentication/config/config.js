const database = require("../controllers/database");
// const dotevn = require('dotenv');

// dotenv.config({ path: 'ENV_FILENAME' });
module.exports = {
    development: {
        port: 5000,
        privateKey: process.env.PRIVATE_KEY,
        databaseUrl: "mongodb+srv://rusev:123qwe@cluster.bsqnt.mongodb.net/cubicle?retryWrites=true&w=majority",
        databaseUrlTest: process.env.DATABASE_URL

        // `mongodb+srv://rusev:${`123qwe`}@cluster.bsqnt.mongodb.net/cubicle?retryWrites=true&w=majority`
    },
    production: {}
};  