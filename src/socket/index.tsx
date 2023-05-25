import { io } from "socket.io-client";
import { useEffect, useState } from "react";


const socket = io(import.meta.env.VITE_SOCKET_URL as string)

function message() {
    const [mess, setMess] = useState("")

    useEffect(() => {
        socket.on("connect", () => {
            console.log("connected "+socket.id);
        });
        
        if(mess){
            socket.emit("send-message", mess, socket.id)
        }
        
    }, [mess])

    useEffect(() => {
        socket.on('recieve-message', message => {
            console.log(message)        
        })
    }, [])

    
    

    return {setMess}
}


export default message


