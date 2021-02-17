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
app.get('/dummy', (req, res) => res.send('Response from Route of the Express Server!!'))

app.listen(4600);

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

console.log("Server running on 8080")
// app.get('*',(req,res)=>
// {
//   res.sendFile(path.join(__dirname,'dist/index.html'))
// })




module.exports = app;
