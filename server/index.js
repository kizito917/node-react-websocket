const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Socket connection
const { Server } = require('socket.io');
const io = new Server(server, {cors: true});

io.on('connection', (socket) => {
    console.log(`User with ${socket.id} has connected successfully`);

    socket.emit('serverMessage', 'Hello world');

    socket.on('userRegistration', (data) => {
        socket.emit('registrationReceived', data);
    });

    // for (const socket of io.sockets.sockets.values()) {
    //     socket.disconnect(true); // Disconnect the socket
    // }
    //console.log('value', Object.keys(io.engine.clients));
});

app.get('/', (req, res) => {
    res.send('Welcome to our app');
});