import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI';

class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onAddBook: PropTypes.func.isRequired
	}

}

render() {
	return (
		<div className='list-books-content'>
			{this.props.books.map((books) => (
				<div className='bookshelf'>
					<h2 className='bookshelf-title'>Currently Reading</h2>
              		<div className='bookshelf-books'>
              		</div>
				</div>
				/*<button onClick={() => onAddBook(books)} className='open-search'> Add book </button>*/
			))}
		</div>
	)

}


export default ListBooks;