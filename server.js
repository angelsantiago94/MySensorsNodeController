const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const request = require('request');
 
request('http://localhost:3000/api/objetos', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});

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
app.use(api.controller);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});


app.listen(port,function(){
    console.log("El servidor está desplegado en localhost:"+port);
});