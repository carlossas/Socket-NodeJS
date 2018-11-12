var socket = io();

//////////////////////ON = escuchar informacion//////////////////////

//SE ACTIVA CUANDO EL USUARIO SE CONECTA
socket.on('connect', function() {
    // if (err) throw new Error(err);
    console.log(`CONECTADO A SOCKET`);
});
//SE ACTIVA CUANDO EL USUARIO SE DESCONECTA
socket.on('disconnect', function() {
    // if (err) throw new Error(err);
    console.log(`PERMIDOS LA CONEXION DE SOCKET`);
});

//EN ESUCHA DEL SERVIDOR, DEL EVENTO ENVIAR MENSAJE
socket.on('enviarMensaje', function(res) {
    // if (err) throw new Error(err);
    console.log('SERVIDOR', res);
});


/////////////////////EMIT = enviar informacion/////////////////////
socket.emit('enviarMensaje', {
    usuario: 'carlos',
    mensaje: 'hola mundo'
        //con esta funcion nos aseguramos de que el mensaje
        //fue recibido con exito en el servidor 
}, function(res) {
    console.log('respuesta server: ', res);

});