function MessageCard({message}) {

    return (
        <section>
        {message && message.map((quote)=>(
            <div className="posted-quote" key={quote.id}>
            <h3>{quote.name}</h3>
            <p>{quote.text}</p>
            </div>
            
        ))}
   
        </section>
    )
}

export default MessageCard;