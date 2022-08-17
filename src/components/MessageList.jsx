import {useState, useEffect} from 'react'
import MessageCard from './MessageCard'
import '../App.css'
export default function MessageList ({message,newMessage})  {
    
    return (
        <>
        <div className='quote-box'>
        
            <h2>Message List</h2>
            <MessageCard  message={message}/>
        </div>
        </>

    )

}