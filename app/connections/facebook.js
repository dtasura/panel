var passport = require('passport'),
    facebookStrategy = require('passport-facebook').Strategy;

var facebookConnection = function (server) {
    passport.use(new facebookStrategy({
        clientID : '401448940520924',
        clientSecret : 'be803913b31aeded0ef6608fe51912ee',
        callbackURL : '/auth/facebook/callback'
    }, function (accessToken, RefreshToken, profile, done){
        done(null,profile);
    }));

    server.get('/auth/facebook', passport.authenticate('facebook'));

    server.get('/auth/facebook/callback',passport.authenticate('facebook',{
        successRedirect : '/extra-data',
        failureRedirect : '/error'
    }));
};

module.exports = facebookConnection;
