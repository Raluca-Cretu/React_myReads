import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI';


function ListBooks (props) {
	return (
		<div className='list-books-content'>
			{props.books.map((books) => (
				<div className='bookshelf'>
					<h2 className='bookshelf-title'>Currently Reading</h2>
              		<div className='bookshelf-books'>
              		</div>
				</div>
				/*<button onClick={() => props.onAddBook(books)} className='open-search'> Add book </button>*/
			))}
		</div>
	)

}


export default ListBooks;