import React, { Component } from 'react';
import ListBooks from './ListBooks';
import * as BooksAPI from '../BooksAPI';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SearchPage extends Component {
  state = {
      query: ''
  }

  updateQuery = (query) => {
  	this.setState( {query: query.trim() })
  }

  render() {
  	const { books, onAddBook } = this.props
  	const { query } = this.state

  	let showingBooks
  	if (query) {
  		const match = new RegExp (escapeRegExp(query), 'i')
  		showingBooks = books.filter((books) => match.test(books.name))
  	} else {
  		showingBooks= books
  	}

  	showingBooks.sort(sortBy('name'))

  	return(
  		<div className="search-books">
  			{showingBooks.map((books) => (
	           <div className="search-books-bar">
	              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
	              <div className="search-books-input-wrapper">
	                <input
	                	type="text"
	                	placeholder="Search by title or author"
	                	value={query}
	                	onChange={(event) => this.updateQuery(event.target.value)}
	                />
	              </div>
	            </div>
	            <div className="search-books-results">
	              <ol className="books-grid"></ol>
	            </div>
  			))}
        </div>
    );
  }

export default SearchPage;