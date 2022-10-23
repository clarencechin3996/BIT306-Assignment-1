//import http package provided by Node
const http = require('http');
const app = require('./backend/app');

// a mthod that accept a reust listener (a function that will executed)
//ES6 arrow functon. Two arguments pass in by node js.
//const server = http.createServer((req, res) => {
//response method - end writing to the response stram
//res.end('This is my first response')
//})

const port = 3000;


//to set the configuration for express
app.set('port', port)
    //pass the app to create server
const server = http.createServer(app);

//http server object listen to the port and execute a function
server.listen(port);
