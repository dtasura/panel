var User = require('../models/user');

var userController = function (server){
    server.route('/logout')
        .get(function(req,res){
            req.logout();
            res.redirect('/');
        });
    server.route('/extra-data')
        .get(function(req,res){
            User.findOne({id_network : req.user.id }, function(err, user){
                if (user) {
                    res.redirect('/');
                }else{
                  var name = req.user._json.name;
                  var urlFoto = "http://graph.facebook.com/" + req.user.id + "/picture";
                    res.render('user/extra-data',{
                        name: name
                    });
                }
            });

        })
        .post(function(req,res){
            var user = new User({
              id_network: req.user.id,
              phone: req.body.phone,
              email : req.body.email,
              name :req.user._json.name,
              dni: req.body.dni
            });
            user.save(function(err){
              if (err) {
                 console.log(err);
                 return;
              }
            });
            res.redirect('/');

        });
};

module.exports = userController;
