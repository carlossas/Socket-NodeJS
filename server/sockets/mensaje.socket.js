const { io } = require('../server')

//ON = escuchar informacion
io.on('connection', (client) => {
    console.log("USUARIO CONECTADO");

    client.on('disconnect', () => {
        console.log("USUARIO DESCONECTADO");
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        //SE DISPARA CUANDO RECIBE CORRECTAMENTE LA INFORMACION

        // if (mensaje.usuario) {
        //     callback({
        //         res: 'todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         res: 'salio mal'
        //     });
        // }
    });

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta app'
    });

})