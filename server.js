// const http = require('http');

// const app = require('./app');

// const port= process.env.PORT || 3000;

// app.set('port',port);

// const server = http.createServer(app);

// server.listen(port);

const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname,'angular')));
//Sending a GET to localhost:8080/dummy should return this
const port= process.env.PORT || 3000;


app.use((req,res,next)=>
{
  res.sendFile(__dirname,'angular','index.html');
});


app.listen(port);


module.exports = app;
