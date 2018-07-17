import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {
	state = {
		books: []
	}

	static propTypes = {
		books: PropTypes.array.isRequired,
		onAddBook: PropTypes.func.isRequired
	}

	renderShelf() {
		return (
	        <div className='bookshelf'>
				<h2 className='bookshelf-title'>{title}</h2>
          		<div className='bookshelf-books'>
          			<ol className="books-grid">
          				<li>
          				{books.filter (book =>  book.shelf === "currently reading" }
          				</li>
          				<li>
          				{books.filter (book =>  book.shelf === "want to read" }
          				</li>
          				<li>
          				{books.filter (book =>  book.shelf === "read" }
          				</li>
          			</ol>
          		</div>
          	</div>
		)
	}

	render() {
		return (
			<div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">

                </div>
                <div className="open-search">
                </div>
            </div>
		)

	}
}

export default ListBooks