const database = require("../controllers/database");

module.exports = {
    development: {
        port: process.env.PORT || 5000,
        databaseUrl: process.env.DATABASE_URL
        
    },
    production: {}
};  