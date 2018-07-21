import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BookDetails extends Component {
  state = {
    books: []
  }

  static propTypes = {
  	book: PropTypes.shape({
      id: PropTypes.string,
      imageLinks: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array,
      shelf: PropTypes.string.isRequired,
    }),
  }

  changeBookShelf = (event) => {
  	this.setState({
  		shelf: event.target.value
  	})
  	this.props.onUpdateBook(this.props.book, event.target.value)
  }

  render() {
  	const { book, title, authors } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select onChange={this.changeBookShelf} value={this.state.shelf}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
      	  </div>

          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default BookDetails