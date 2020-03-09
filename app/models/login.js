var mongoose =  require('../connections/mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var UserSchema = Schema({
  usuario: {type :String , required: true},
  password : {type: String, require: true}
});
// Exportamos el modelo para usarlo en otros ficheros
var Login = mongoose.model('clients', UserSchema);
module.exports = Login;
