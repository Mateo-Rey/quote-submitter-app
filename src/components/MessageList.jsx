import {useState, useEffect} from 'react'
import MessageCard from './MessageCard'
export default function MessageList ()  {
    const [message, setMessage] = useState('')
    useEffect(() => {
        fetch("https://chat-app-98837.web.app/messages")
        .then(res => res.json())
        .then(data => setMessage(data))
    },[])
    return (
        <div>
            <h2>Message List</h2>
            <ul>
                <MessageCard  message={message}/>
            </ul>
        </div>

    )

}