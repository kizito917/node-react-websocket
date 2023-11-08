import { useEffect, useState } from "react";
import { getSocket, initSocket } from "./helpers/socketHelper";

function App() {
    const [socket, setSocket] = useState(getSocket());

    useEffect(() => {
        if (socket) {
            socket.emit('userRegistration', 'hello');

            socket.on('registrationReceived', (data) => {
                console.log(data);
            });
        }
    }, [socket]);

    useEffect(() => {
        initSocket();
        setSocket(getSocket);
    }, []);

    return (
        <div className="App">
            <h3>Welcome to my React application</h3>
        </div>
    );
}

export default App;
