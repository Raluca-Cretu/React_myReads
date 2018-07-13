import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI';


function ListBooks (props) {
	return (
		<div className='list-books-content'>
			{props.books.map((book) => (
				<div className='bookshelf'>
					<h2 className='bookshelf-title'>Currently Reading</h2>
              		<div className='bookshelf-books'>
              		</div>
				</div>
			))}
		</div>
		<button onClick={() => props.onAddBook(book)} className='open-search'>
				Add book
		</button>
	)

}



export default ListBooks