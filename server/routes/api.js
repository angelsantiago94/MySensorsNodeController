const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Objeto = require('../models/objetos-prueba');

const db ="mongodb://root:root@ds131546.mlab.com:31546/my-sensors-controller";
mongoose.Promise=global.Promise;

mongoose.connect(db,function(err){
    if(err){
        console.error("Error al conectar a la base de datos: " + err);
    }
});

router.get('/',function(req,res){
    res.send('la api funciona');
});

router.get('/objetos',function(req,res){
    console.log("Peticion Get de todos los objetos de prueba");
    Objeto.find({}).exec(function(err,objetos){
        if(err){
            console.error("Error al buscar los objetos en la base de datos: "+err);
        }else{
            res.json(objetos);
        }
    });
});

router.get('/objetos/:id',function(req,res){
    console.log("Peticion Get del objeto con el id="+req.params.id);
    Objeto.findById(req.params.id).exec(function(err,objeto){
        if(err){
            console.error("Error al buscar los objetos en la base de datos: "+err);
        }else{
            res.json(objeto);
        }
    });
});

module.exports = router;