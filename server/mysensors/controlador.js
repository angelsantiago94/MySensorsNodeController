const mysensors = require('./index');
var controller = mysensors.usingEthernetGateway("192.168.1.69", 5003);

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db ="mongodb://root:root@ds131546.mlab.com:31546/my-sensors-controller";
mongoose.Promise=global.Promise;

mongoose.connect(db,function(err){
    if(err){
        console.error("Error al conectar a la base de datos: " + err);
    }
});

const Sensor = require('../models/sensors');
const Node = require('../models/nodes');


controller.on("newNode", function(n) {
    console.log("Inserción en la base de datos de un nodo: " + n);
    Node.insertOne(n,function(err, res){
        if (err){
            console.log("Error al insertar nodo",err);
        }else{
            console.log("nodo insertado",n);
        }
    })
  });

  controller.on("update", function(n) {
    console.log("Actualizacion en la base de datos de un nodo: "+ n);
    Node.updateOne({id:n.id},n,function(err,res){
        if (err){
            console.log("Error al actualizar nodo",err);
        }else{
            console.log("nodo actualizado",n);
        }
    });
    
  });

  controller.on("sensorUpdate", function(n,s) {
    console.log("Actualizacion en la base de datos de un sensor: "+ n +" "+s);
    Node.updateOne({id:n.id},n,function(err,res){
        if (err){
            console.log("Error al actualizar nodo",err);
        }else{
            console.log("nodo actualizado",n);
        }
    });
    s.updateTime=new Date();
    Sensor.updateOne({id:s.id},{value:s.value, updateTime: new Date()},function(err,res){
        if (err){
            console.log("Error al actualizar sensor",err);
        }else{
            console.log("sensor actualizado",s);
        }
    });
  });

  controller.on("message", function(m) {
    console.log("Mensaje Recibido", m);
    if(m.sensor!=255){
        console.log("Mensaje Recibido", m);
        Sensor.updateOne({id:m.sensor},{value:m.payload, updateTime: new Date()
        },function(err,res){
            if (err){
                console.log("Error al actualizar sensor",err);
            }else{
                console.log("sensor actualizado por mensaje",m);
            }
        });
    }
    
  });

  router.post('/sendMensaje',function(req,res){
    console.log("Enviar el mensaje",req.body);
    controller.sendMessage({
        destination: req.body.destination,
        sensor: req.body.sensor,
        command: req.body.command,
        type: req.body.type,
        payload: req.body.payload
      });
    res.json({codigoRespuesta:"OK"});
});