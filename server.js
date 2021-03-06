const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const request = require('request');
 
const api = require('./server/routes/api');

const port = 3000;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname,'dist')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport')(passport);

app.use('/api',api);
//app.use(api.controller);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});
var http=require('http');
var server = http.createServer(app);
global.io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){ 

    socket.on('disconnect', () => {
        console.log(`Deleting socket: ${socket.id}`);
        
      });

    socket.on('sensor-update', () =>{
        console.log("####### Sensor UPDATE ######");
        io.sockets.emit('ActualizaSensores', "Actualiza Sensores"); // emit an event to all connected sockets
    });

});

app.get("/msupdate",(req,res)=>{
    console.log("####### Pidiendo actualizar sensores");
    io.sockets.emit('sensor-update', "Actualiza  Sensores");
});

var apiMySensors = require('./server/mysensors/controlador');
app.use('/mysensors',apiMySensors);




server.listen(port,function(){
    console.log("El servidor está desplegado en localhost:"+port);
});