import axios from 'axios';
const BASE_URL = 'http://localhost:4000/api';

// www.example.com/api/quotes -> example api after deploying


// API call to get all quotes

export const getAllQuotes = async () => {
    const data = await axios.get(`${BASE_URL}/quotes`);
    console.log('Get Qutoes: ', data)
    return data;
}

// API call to get one quote by quoteId

export const getQuoteById = async (quoteId) => {
    const data = await axios.get(`${BASE_URL}/quotes/${quoteId}`);
    return data;

}

// API call to add a new quote

export const addNewQuote = async (payload) => {
    const data = await axios.post(`${BASE_URL}/quotes`, payload);
    console.log('Add Quote: ', data);
    return data;
}

// API call to update a quote by quoteId

export const updateQuoteById = async (quoteId, payload) => {
    const data = await axios.put(`${BASE_URL}/quotes/${quoteId}`, payload)
    console.log('Update Quote: ', data);
    return data;
}

// API call to delete a quote by quoteId

export const deleteQuoteById = async (quoteId) => {
    const data = await axios.delete(`${BASE_URL}/quotes/${quoteId}`);
    console.log('Delete Quote: ', data);
    return data;
}