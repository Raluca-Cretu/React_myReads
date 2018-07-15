import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onAddBook: PropTypes.func.isRequired
	}

	render() {
		return (
			<div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div className='bookshelf'>
						<h2 className='bookshelf-title'>c</h2>
	              		<div className='bookshelf-books'></div>
	              	</div>
                </div>
                <div className="open-search">
               		/*<a onClick={() => onAddBook(books)} >Add a book</a>
                    <Link
                        to='/search'
                    >
                        Add a book
                    </Link>*/
                </div>
            </div>
		)

	}
}

export default ListBooks