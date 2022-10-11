import React from 'react'
import quotes from './QuoteDB';
import './QuoteAndAuthor.css'
import Cat from "./Cat.png"
function QuoteAndAuthor(props) {
  const {quote, generateRandomQuote} = props;

    return (
    <div className='card'>
      <hr/>
     <h1 className='title'>What do you want to hear right now, Hooman?</h1>
      <hr />
      <div className="card-body">
        <h1 className='card-text'><mark>"{quote.quote}"</mark></h1>
        <h5 className='card-title'>~{quote.author}</h5>
        <button
        onClick={() => {generateRandomQuote(quotes)}}
        type='submit'
        >
            Share your wisdom
        </button>
        <button
        onClick={() => {generateRandomQuote(quotes);
            window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
        }}type='submit'
       >
            Share on twitter
        </button>
       
      </div>
      <img className='catto' src={Cat} alt="cat"/> 
    </div>
  )
}

export default QuoteAndAuthor
