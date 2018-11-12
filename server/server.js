const express = require('express');

const socketIO = require('socket.io');

const http = require('http')

const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = es la conexion con el backend
//Exportamos IO para usarlo en los sockets
module.exports.io = socketIO(server);
//Iniciamos nuestros sockets con un require
require('./sockets/mensaje.socket')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});