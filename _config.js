var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://jncheg:joannalee@cluster1.katgoki.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://jncheg:joannalee@cluster1.katgoki.mongodb.net/darkroom?retryWrites=true&w=majority',
    test: 'mongodb+srv://jncheg:joannalee@cluster1.katgoki.mongodb.net/test?retryWrites=true&w=majority',
}
module.exports = config;
