import React from 'react'
import QuoteandAuthor from './Components/QuoteAndAuthor'
import quotes from './Components/QuoteDB'
import './App.css'



export default class App extends React.Component{
  
  state = {
    quote: quotes[0].quotes, 
    author: quotes[0].author
  }

 generateRandomQuote = (arr) => {

  let num = Math.floor(Math.random() * quotes.length)

  let newQuote = quotes[num]; 

  this.setState({
    quote: newQuote.quote, 
    author: newQuote.author
  })

  this.shuffleQuotes(quotes)

 }

 shuffleQuotes = (arr) => {
  return arr.sort(function (){return 0.5 - Math.random()});
 }

 render =()=>{
  return (
    <div>
      <div className='block'>
        <h1 className='secret'>Meow! Hooman.</h1>
      </div>
    <div className='container'>
    <QuoteandAuthor generateRandomQuote={this.generateRandomQuote}
    quote={this.state}
    />
</div>
   <div>
   
   </div>
    </div>
  )
 }
}
