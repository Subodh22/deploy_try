// const http = require('http');

// const app = require('./app');

// const port= process.env.PORT || 3000;

// app.set('port',port);

// const server = http.createServer(app);

// server.listen(port);
// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')

// app.use(bodyParser.json())

// app.post('/api/register',(req,res)=>
// {
//   console.log("req.body")

// })

// app.listen(1234,()=>console.log("server listenining at 1234"))
const express = require('express');
const app = express();
const path = require('path');
let cors = require('cors');
let bodyParser = require('body-parser');    //Extract data from Express

app.use(cors())

let test_api = require('./server/routes/test_api');
app.use(express.static(path.join(__dirname,'angular')));
//Sending a GET to localhost:8080/dummy should return this
const port= process.env.PORT || 3000;

app.get('*',(req,res)=>
{
  res.sendFile(path.join(__dirname,'angular/index.html'))
})



app.listen(port);


module.exports = app;
