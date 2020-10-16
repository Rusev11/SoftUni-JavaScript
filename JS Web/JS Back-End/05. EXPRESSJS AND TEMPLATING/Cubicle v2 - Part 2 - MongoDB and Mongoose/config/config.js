const database = require("../controllers/database");

module.exports = {
    development: {
        port: process.env.PORT || 5000,
        databaseUrl: process.env.DATABASE_URL
        // `mongodb+srv://rusev:${`123qwe`}@cluster.bsqnt.mongodb.net/cubicle?retryWrites=true&w=majority`
    },
    production: {}
};  