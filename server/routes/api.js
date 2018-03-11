const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const passport = require('passport');
const jwt = require('jsonwebtoken');

var mysensors = require("../mysensors/index");
var controller = mysensors.usingSerialGateway("/dev/serial.path"); // or "COMx" for Windows mates
// or
//var controller = mysensors.usingEthernetGateway("host or ip", port); // Should also work with the ESP8266 gateway

const Objeto = require('../models/objetos-prueba');
const User = require('../models/usuarios');
const Sensor = require('../models/sensors');
const Node = require('../models/nodes');

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


//Objetos de prueba 
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

router.post('/objeto',function(req,res){
    console.log("Inserción en la base de datos de un objeto");
    var newObjeto = new Objeto();
    newObjeto.nombre = req.body.nombre;
    newObjeto.descripcion = req.body.descripcion;
    newObjeto.save(function(err,objetoInsertado){
        if(err){
            console.log("Error al insertar el objeto: "+err);
        }else{
            res.json(objetoInsertado);
        }
    });
});

router.put('/objeto/:id',function(req,res){
    console.log("Edición en la base de datos de un objeto con id="+req.params.id);
    Objeto.findByIdAndUpdate(req.params.id,{
        $set: {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        }
    },{new:true},function(err,objetoEditado){
        if(err){
            console.log("Error en la edicion del objeto");
        }else{
            res.json(objetoEditado);
        }
    });
});

router.delete('/objeto/:id',function(req,res){
    console.log("Eliminando un objeto con id="+req.params.id);
    Objeto.findByIdAndRemove(req.params.id,function(err,objetoEliminado){
        if(err){
            console.log("Error al eliminar el objeto");
        }else{
            res.json(objetoEliminado);
        }
    });
});

//Usuarios

router.post("/registro",function(req,res,next){
    console.log("Registrando un usuario");
    let nuevoUsuario = new User({
        nombreUsuario: req.body.nombreUsuario,
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(nuevoUsuario, function(err,usuario){
        if(err){
            console.log("Ha habido un error al insertar el usuario");
            res.json({success: false, msg:"Fallo al insertar el usuaio"});
        }else{
            res.json({success: true, msg:"Exito al insertar el usuaio"});
        }
    });
});

router.post('/login',function(req,res,next){
    const email = req.body.email;
    const password = req.body.password;
    User.getUsuarioEmail(email,function(err,usuario){
        if(err){
            console.log("Error al autenticar",err);
        }else{
            if(!usuario){
               return res.json({success: false, msg:"Fallo al buscar el usuaio"});                
            }else{
                User.comparePassword(password,usuario.password,function(err,encontrado){
                    if(err){
                        return console.log("Error al comparar las contraseñas",err);
                    }
                    if(encontrado){
                        const token = jwt.sign({data:usuario},'mysensors',{expiresIn: 604800});
                        res.json({
                            success: true, 
                            token: 'JWT '+token,
                            usuario:{
                                id: usuario._id,
                                nombreUsuario: usuario.nombreUsuario,
                                email: usuario.email,
                                role: usuario.role
                            }
                        }); 
                    }else{
                        res.json({success: false, msg:"Contraseña errornea"}); 
                    }
                });
            }
        }
    });
});

router.get('/perfil',passport.authenticate('jwt',{session:false}),function(req,res){
    res.json({usuario: req.user});
});


//Controler

//nuevo nodo
controller.on("newNode", function(n) {
    console.log("Inserción en la base de datos de un nodo");
    var newNodo = new Node();
    newNodo.id = n.id;
    newNodo.protocol = n.protocol;
    newNodo.sketchName = n.sketchName;
    newNodo.sketchName = n.sketchName;
    newNodo.sketchVersion = n.sketchVersion;
    newNodo.save(function(err,nodoInsertado){
        if(err){
            console.log("Error al insertar el nodo: "+err);
        }else{
            res.json(nodoInsertado);
        }
    });
  });


module.exports = router;
module.exports = controller;