import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'

class BookList extends React.Component {


	render () {

    // destructuring props so can be called without 'this.props'
    const { books, changeShelf } = this.props

		return (
   	
  		<div>
         <h1>MyReads</h1> 
         
            <div >
              <div>
                <CurrentlyReading changeShelf={changeShelf} books={books} />
              </div>
              <div>
                <WantToRead changeShelf={changeShelf} books={books} />
              </div>
              <div>
                <Read changeShelf={changeShelf} books={books} />
              </div>

            </div>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>

          </div>

       )
	}
}



export default BookList