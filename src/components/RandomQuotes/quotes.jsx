import React from 'react'
import './RandomQuote.css'
import { useState } from 'react'

const Quotes = () => {

    let quotes = []

    async function loadQuotes() {
        const response = await fetch('https://type.fit/api/quotes')
        quotes = await response.json()
    }

    let [quote, setQuote] = useState({ // setting dafault quote and author
        text: "A man is measured by his attitude and the way he thinks not by clothing and money",
        author: "Ahmed Soliman",
    })

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(select)
    }

    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    loadQuotes()

    return (
        <div className='container'>
            <div className="quote">{quote.text}</div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">- {quote.author.split(',')[0]}</div>
                <div className="icons">
                    <span onClick={() => { twitter() }}>Twitter</span>
                    <span onClick={() => { random() }}>Reload</span>
                </div>
            </div>
        </div>
    )
}

export default Quotes
