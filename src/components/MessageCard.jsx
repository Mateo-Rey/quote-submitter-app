function MessageCard({message}) {

    return (
        <section>
        {message && message.map((quote)=>(
            <div className='posted-quote'  key={quote.id}>
            <h3>{quote.title}</h3>
            <p>{quote.message}</p>
            </div>
            
        ))}
   
        </section>
    )
}

export default MessageCard;