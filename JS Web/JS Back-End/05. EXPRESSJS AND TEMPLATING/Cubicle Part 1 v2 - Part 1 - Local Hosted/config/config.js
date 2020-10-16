const database = require("../controllers/database");

module.exports = {
    development: {
        port: process.env.PORT || 5000,
        databaseUrl: `mongodb+srv://rusev:${`123qwe`}@cluster.bsqnt.mongodb.net/cubicle?retryWrites=true&w=majority`
    },
    production: {}
};