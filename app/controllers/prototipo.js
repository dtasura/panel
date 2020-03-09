var protoController = function (server){

    server.route('/inicio')
          .get(function(req,res){
              res.render('home/index',{
                title: 'inicio',
                name:'jose'
              });
        });

    server.route('/disponible')
          .get(function(req, res){
              res.render('pedidos/disponibles',{
                  cantidad: ['a'],
                  name:'jose',
                  title: 'DISPONIBLES'
              });
          });
    server.route('/all')
          .get(function(req, res){
              res.render('pedidos/disponibles',{
                  cantidad: ['a','b','v',1,2],
                  name:'jose',
                  title: 'TODOS'
              });
          });
    server.route('/cancelado')
          .get(function(req,res){
              res.render('pedidos/disponibles',{
                  cantidad: ['cancel'],
                  name:'jose',
                  title: 'CANCELADOS'
              });
          });
    server.route('/tomados')
          .get(function(req, res){
              res.render('pedidos/tomado',{
                  cantidad: ['a'],
                  name:'jose',
                  title: 'ATENDIDOS'
              });
          });

    server.route('/recogido')
          .get(function(req, res){
              res.render('pedidos/tomado',{
                  cantidad: ['a'],
                  name:'jose',
                  title: 'RECOGIDOS'
              });
          });
    server.route('/acopio')
          .get(function(req, res){
              res.render('pedidos/disponibles',{
                  cantidad: ['a',2,3],
                  name: 'jose',
                  title: 'ACOPIO'
              });
          });
      server.route('/generar')
      .get(function(req, res){
          res.render('pedidos/asignar',{
              cantidad: ['a','b','v',1,2],
              name:"jose",
              title: 'TODOS'
            });
          });
      server.route('/detalle')
          .get(function(req, res){
              res.render('pedidos/detalle',{
                    dato: 1,
                    name: 'jose',
                    title: 'Detalle'
              });
          });
      server.route('/informe')
          .get(function(req, res){
              res.render('pedidos/informe',{
                    dato: 1,
                    name: 'jose',
                    title: 'Informe Por fecha'
              });
          });
      server.route('/personal')
          .get(function(req, res){
              res.render('pedidos/personal',{
                    dato: 1,
                    name: 'jose',
                    title: 'COLABORADORES'
              });
          });
      server.route('/registrar-envio')
          .get(function(req, res){
              res.render('pedidos/registrarEnvio',{
                    dato: 1,
                    name: 'jose',
                    title: 'COLABORADORES'
              });
          });
}

module.exports = protoController;
