var config = {
development: {
    //url to be used in link generation
    url: 'http://localhost',
    //jwtsecret
    jwtSecret: 'wotproject',
    refreshTokenSecret: 'wotprojectrefreshtoken',

    //mongodb connection settings
    database: {
        mongodb_uri: 'mongodb://localhost:27017/ionic-jwt',
        port:   '27017',

    },
    ValidityTime : 3600,
    certificate: 'src/my.wot.application+4.pem',
    privatekey: 'src/my.wot.application+4-key.pem',

    refreshTokenLife : 86400,



    //server details
    server: {

        port: '8443'
    }

},
production: {
    //url to be used in link generation
    url: 'http://my.wot.application',
    //jwtsecret
    jwtSecret: 'wotproject',
    //mongodb connection settings
    database: {
        mongodb_uri: 'mongodb://localhost:27017/WOT_DB',
        port: '27017',

    },

    //server details
    server: {

        port:   '8444'
    }
}
};
module.exports = config;

