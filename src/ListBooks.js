import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ListBooks extends Component {
  static propTypes = {
	  books: PropTypes.array.isRequired,
  }

  render() {
  	return (
      <div className='bookshelf'>
		  <h2 className='bookshelf-title'>{title}</h2>
      	  <div className='bookshelf-books'>
      		<ol className="books-grid">
    		  {books.map(book => books)}
      		</ol>
      	  </div>
      </div>
	)
  }

}

export default ListBooks