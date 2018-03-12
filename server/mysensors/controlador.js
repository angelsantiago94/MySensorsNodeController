const mysensors = require('index');
var controller = mysensors.usingEthernetGateway("192.168.1.69", 5003);


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