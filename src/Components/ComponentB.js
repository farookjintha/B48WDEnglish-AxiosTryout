import { useState, useEffect } from "react";
import { addNewQuote, deleteQuoteById, getAllQuotes, updateQuoteById } from "../services/fetchAPI";


const ComponentB = () => {
    const [quotes, setQuotes] = useState([]);
    const [newQuote, setNewQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [updateQuoteId, setUpdateQuoteId] = useState('');

    useEffect(() => {
        getQuotes();
    }, []);

    const getQuotes = async() => {
        const data = await getAllQuotes();
        if(data){
            setQuotes(data.quotes);
        }
    }

    const addQuote = async () => {
        if(newQuote && author){
            const payload = {
                quote: newQuote, 
                author: author
            }
            const data = await addNewQuote(payload);
            if(data){
                setNewQuote('');
                setAuthor('');
                getQuotes();
            }
        }
    }

    const deleteQuote = async(quoteId) => {
        const data = await deleteQuoteById(quoteId);
        if(data){
            getQuotes();
        }
    }

    const setQuoteDetails = (quote) => {
        setNewQuote(quote.quote);
        setAuthor(quote.author);
        setUpdateQuoteId(quote._id);
    };

    const updateQuote = async () => {
        if(updateQuoteId){
            const payload = {
                quote: newQuote, 
                author: author
            }
            const data = await updateQuoteById(updateQuoteId, payload)
            if(data){
                setNewQuote('');
                setAuthor('');
                setUpdateQuoteId('');
                getQuotes();
            }
        }
    };



    return (
        <div>
            <h1>API integration using Fetch</h1>

            <div>
                <div>
                    <label>QUOTE: </label>
                    <textarea placeholder='Enter some quote' value={newQuote}  rows='10' cols='50' onChange={(e) => setNewQuote(e.target.value)}/>
                </div>
                <div>
                    <label> AUTHOR </label>
                    <input placeholder="Enter author name"  value={author} onChange={(e) => setAuthor(e.target.value) } />
                </div>
                <div>
                    <button onClick={addQuote}>Add Quote</button>
                    <button onClick={updateQuote}>Update Quote</button>
                </div>
            </div>

            {!!quotes.length && <div>
                <h1>Quotes</h1>
                {
                    quotes.map((quote, index) => (
                        <div key={index}>
                            <h3>Quote: {quote.quote}</h3>
                            <h3>Author: {quote.author}</h3>
                            <button onClick={() => setQuoteDetails(quote)}>Edit</button>
                            <button onClick={() => deleteQuote(quote._id)}>Delete</button>
                            
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}

export default ComponentB;