// const http = require('http');

// const app = require('./app');

// const port= process.env.PORT || 3000;

// app.set('port',port);

// const server = http.createServer(app);

// server.listen(port);

const express = require('express');
const app = express();
const path = require('path');
let cors = require('cors');
let bodyParser = require('body-parser');

app.use(cors())

let test_api = require('./server/routes/test_api');
app.use(express.static(path.join(__dirname,'angular')));
//Sending a GET to localhost:8080/dummy should return this
const port= process.env.PORT || 3000;


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
app.use('/test_api', test_api);


app.get('*',(req,res)=>
{
  res.sendFile(path.join(__dirname,'angular/index.html'))
})

app.listen(port);


module.exports = app;
