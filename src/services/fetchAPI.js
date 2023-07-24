const BASE_URL = 'http://localhost:4000/api';


// API call to get all quotes

export const getAllQuotes = async () => {
    const response = await fetch(`${BASE_URL}/quotes`);
    const data = await response.json()
    return data;
}

// API call to get one quote by quoteId

export const getQuoteById = async (quoteId) => {
    const response = await fetch(`${BASE_URL}/quotes/${quoteId}`);
    const data = await response.json();
    return data;

}

// API call to add a new quote

export const addNewQuote = async (payload) => {
    const response = await fetch(`${BASE_URL}/quotes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    return data;
}

// API call to update a quote by quoteId

export const updateQuoteById = async (quoteId, payload) => {
    const response = await fetch(`${BASE_URL}/quotes/${quoteId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    const data = await response.json()
    return data;
}

// API call to delete a quote by quoteId

export const deleteQuoteById = async (quoteId) => {
    const response = await fetch(`${BASE_URL}/quotes/${quoteId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data;
}