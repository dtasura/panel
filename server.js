var express = require('express'),
    swig = require('swig'),
    passport = require('passport'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');
var server = express();


//config session
server.use(bodyParser.urlencoded({
    extended : true
}));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(session({secret : 'mi clave'}));

//config passport
server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser(function (user, done){
    done(null, user); //req.user
});

passport.deserializeUser(function(user, done){
    done(null,user);
});
//config swig
server.engine('html',swig.renderFile);
server.set('view engine','html');
server.set('views',__dirname + '/app/views');

server.use(express.static('./public'));

//controllers
require('./app/controllers/home')(server);
require('./app/controllers/user')(server);
require('./app/controllers/prototipo')(server);

require('./app/connections/facebook')(server);


server.listen(process.env.PORT || 3000);
