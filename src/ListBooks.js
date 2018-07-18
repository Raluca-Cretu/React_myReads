import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookDetails from './BookDetails'


class ListBooks extends Component {
  state = {
    books: []
  }

  static propTypes = {
	  books: PropTypes.array,
	  title: PropTypes.string.isRequired,
  }

  render() {
  	const { title } = this.props;
  	return (
      <div className='bookshelf'>
		  <h2 className='bookshelf-title'>{title}</h2>
      	  <div className='bookshelf-books'>
      		<ol className="books-grid">

      		</ol>
      	  </div>
      </div>
	)
  }

}

export default ListBooks