import React, { Component } from 'react'



class BookDetails extends Component {
    state = {
      books: []
    }

    changeBookShelf = (event) => {
      this.setState({
  	  shelf: event.target.value
  	  })
  	  this.props.onUpdateBook(this.props.book, event.target.value)
    }

    render() {
  	  const style = {
		width: 128,
		height: 193,
		backgroundImage: this.props.book.imageLinks ?
        `url(${this.props.book.imageLinks.thumbnail})` : ''
  	}


    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={ style }>
            </div>
            <div className="book-shelf-changer">
              <select onChange={this.changeBookShelf} value={this.state.shelf}>
                <option value="none" defaultValue>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
      	  </div>

          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default BookDetails