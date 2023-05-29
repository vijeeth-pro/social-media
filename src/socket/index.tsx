import { io } from "socket.io-client";
import { useEffect, useState } from "react";

interface Message {
    message?: string
    status?: boolean
}


const socket = io(import.meta.env.VITE_SOCKET_URL as string)

function message() {
    const [mess, setMess] = useState("")
    const [response, setResponse] = useState<Message>({ message: "", status: true})

    useEffect(() => {
        socket.on("connect", () => {
            // console.log("connected "+socket.id);
        });
        
        if(mess){
            // console.log(mess);
            
            socket.emit("send-message", mess)
        }
        
    }, [mess])

    useEffect(() => {
        socket.on('recieve-message', message => {
            setResponse(message)        
        })
    }, [])

    
    

    return {mess, setMess, response}
}


export default message


