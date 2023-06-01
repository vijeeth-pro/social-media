import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { MessageType, Response } from "@/types";



const socket = io(import.meta.env.VITE_SOCKET_URL as string)

function message():MessageType {
    const [mess, setMess] = useState("")
    const [response, setResponse] = useState<Response>({ message: "", value: true})

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


