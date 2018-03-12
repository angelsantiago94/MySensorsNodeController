const mysensors = require('./index');
var controller = mysensors.usingEthernetGateway("192.168.1.69", 5003);

const Sensor = require('../models/sensors');
const Node = require('../models/nodes');


controller.on("newNode", function(n) {
    console.log("Inserción en la base de datos de un nodo");
    var newNodo = new Node();
    
    newNodo.id = n.id;
    newNodo.protocol = n.protocol;
    newNodo.sketchName = n.sketchName;
    newNodo.sesors = n.sensors;
    newNodo.sketchVersion = n.sketchVersion;
    newNodo.save(function(err,nodoInsertado){
        if(err){
            console.log("Error al insertar el nodo: "+err);
        }else{
            console.log("nodo insertado", nodoInsertado);
        }
    });
  });

  controller.on("update", function(n) {
    console.log("Actualizacion en la base de datos de un nodo");
    var newNodo = new Node();
    
    newNodo.id = n.id;
    newNodo.protocol = n.protocol;
    newNodo.sketchName = n.sketchName;
    newNodo.sesors = n.sensors;
    newNodo.sketchVersion = n.sketchVersion;
    newNodo.update({id:n.id},function(err,nodoInsertado){
        if(err){
            console.log("Error al actualizar el nodo: "+err);
        }else{
            console.log("nodo actualizado", nodoInsertado);
        }
    });
  });

  controller.on("sensorUpdate", function(n,s) {
    console.log("Actualizacion en la base de datos de un sensor");
    var newNodo = new Node();
    
    newNodo.id = n.id;
    newNodo.protocol = n.protocol;
    newNodo.sketchName = n.sketchName;
    newNodo.sesors = n.sensors;
    newNodo.sketchVersion = n.sketchVersion;
    newNodo.update({id:n.id},function(err,nodoInsertado){
        if(err){
            console.log("Error al actualizar el nodo: "+err);
        }else{
            console.log("nodo actualizado", nodoInsertado);
        }
    });

    var newSensor = new Sensor();
    
    newSensor.id = s.id;
    newSensor.value = s.value;
    newSensor.type = s.type;
    newSensor.updateTime = s.updateTime;
    newSensorw.update({id:s.id},function(err,nodoInsertado){
        if(err){
            console.log("Error al actualizar el nodo: "+err);
        }else{
            console.log("nodo actualizado", nodoInsertado);
        }
    });
  });

  controller.on("message", function(m) {
    console.log("Mensaje Recibido", m);
  });