const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    Titulo: String,
    descripcion: String,
    Creador: {
        type: Schema.ObjectId,
        ref: 'Usuarios'
    },
    Destinatario: {
        type: Schema.ObjectId,
        ref: 'Usuarios'
    },
    fCreacion:{
        type:Date,
        default: new Date()
    }
});

module.exports = mongoose.model('tarea',tareaSchema,'Tareas');