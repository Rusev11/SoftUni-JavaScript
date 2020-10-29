const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbURL: 'mongodb+srv://rusev:123qwe@cluster.bsqnt.mongodb.net/origami?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];