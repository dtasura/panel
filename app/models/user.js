var mongoose =  require('../connections/mongoose');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var UserSchema = Schema({
  id_network: {type : String},
  phone: {type :String , required: true, index:{unique:true}},
  email : {type: String, require: true},
  name : {type: String},
  dni : {type: String}
});
// Exportamos el modelo para usarlo en otros ficheros
var User = mongoose.model('client', UserSchema);
module.exports = User;
