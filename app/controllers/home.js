var Login = require('../models/login');

var homeController = function (server){
  console.log("home cpntrollers");

  server.route('/')
    .get(function(req,res){
        if (req.user) {
          //console.log(req.user);
            var name = req.user._json.name;
            var urlFoto = "http://graph.facebook.com/" + req.user.id + "/picture";
            res.render('home/index',{
               name: name,
               urlFoto: urlFoto
            });
        }else{
            res.render('home/login');
        }
    })
    .post(function (req, res){
        var log = new Login({
            usuario: req.body.usuario,
            password: req.body.contrasena
        });
        log.find(function(err){
            if(err){
                console.log(err);

            }
            else{
                console.log('trajo nien');
            }
        })



    });

    server.route('/registro')
        .get(function(req,res){
            res.render('home/registro');
        })
};

module.exports = homeController;
