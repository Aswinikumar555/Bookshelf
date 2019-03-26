import React from 'react'
import './App.css'

class Total extends React.Component {

 
	render(){

	    const { book, changeShelf } = this.props
console.log(book.imageLinks.thumbnail)
		return(
	      <li key={book.id}>
	         <div className="book">
	            <div className="book-top">
							<div className="book-cover" key={book.imageLinks.thumbnail} style={{ backgroundImage: `url(${book.imageLinks.thumbnail})`}} alt="book cover"></div>
	              <div className="book-shelf-changer">
	                <select onChange={(event) => changeShelf(book, event.target.value)} defaultValue={book.shelf}>
	                  <option value="none" disabled>Move to...</option>
	                  <option value="currentlyReading">Currently Reading</option>
	                  <option value="wantToRead">Want to Read</option>
	                  <option value="read">Read</option>
	                  <option value="none">None</option>
	                </select>
	              </div>
	            </div>
	            <div className="book-title" key={book.title}>{book.title}</div>
	            <div className="book-authors" key={book.authors}>{book.authors}</div>
	          </div>
	        
	        </li>
	      
		)
	}
}


export default Total