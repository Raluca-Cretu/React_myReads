import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI';

class ListBooks extends Component {
	render() {
		return (
			<div className='list-books-content'>
				{this.props.books.map((books) => (
					<div className='bookshelf'>
						<h2 className='bookshelf-title'>Currently Reading</h2>
                  		<div className='bookshelf-books'>
                  		</div>
					</div>
				))}
			</div>
			<button className='open-search'>
			 	Add book
			</button>
		)
	}
}

export default ListBooks