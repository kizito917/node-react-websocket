import io from 'socket.io-client';

let socket = null;

export const initSocket = () => {
    if (!socket) {
        socket = io('ws://localhost:9200', {reconnection: false});

        socket.on('connect', () => {
            console.log(`Socket Connected to server`);
        });

        socket.on('disconnect', () => {
            console.log('Socket disconnected from server');
        });
    }
}

export const getSocket = () => socket;