const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objetoSchema = new Schema({
    nombre: String,
    descripcion:String
});

module.exports = mongoose.model('objetoPrueba',objetoSchema,'ObjetosPrueba');