const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    role: {
        type: String,
        default: "usuario",
        required: false
    }
});

const Usuario = module.exports = mongoose.model('usuario',usuarioSchema,'Usuarios');

module.exports.getUsuarioId = function(id,callback){
    Usuario.findById(id, callback);
}

module.exports.getUsuarioUserName = function(userName,callback){
    const query ={nombreUsuario:userName}
    Usuario.findOne(query, callback);
}

module.exports.getUsuarioEmail = function(email,callback){
    const query ={email:email}
    Usuario.findOne(query, callback);
}

module.exports.addUser = function(nuevoUsuario,callback){
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(nuevoUsuario.password,salt,function(err,hash){
            if(err){
                console.log(err);
            }
            nuevoUsuario.password = hash;
            nuevoUsuario.save(callback);
        });
    });
}

module.exports.comparePassword =function(posiblePassword, hash, callback){
    bcrypt.compare(posiblePassword,hash,function(err,encontrado){
        if(err){
            console("Error al comparar las contraseñas",err);
        }else{
            callback(null,encontrado);
        }
    });
}
