import { useState } from "react"
import { useEffect } from "react"

export const MessageCard = ( ) => {
    const [message, setMessage] = useState('')
    useEffect((e) => {
        fetch("https://chat-app-98837.web.app/messages")
        .then(res => res.json())
        .then(data => setMessage(data()))
        .catch(alert(err=> err.message))
    },[])
    return (
        <> 
        <div className="Message-Card">{message}</div>
        </>
        
    )
}