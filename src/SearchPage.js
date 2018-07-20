import React, { Component } from 'react'
import BookDetails from './BookDetails'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SearchPage extends Component {
    state = {
        query: ''
    };

    updateQuery = (query) => {
     	this.setState({
            query: query.trim()
        })
    }

    render() {
      	const { query, books} = this.props
   

      	let searchingBook
      	if (query) {
      		const match = new RegExp (escapeRegExp(query), 'i')
      		searchingBook = books.filter((books) => match.test(books.name))
      	} else {
      		searchingBook = books
        }

  	    searchingBook.sort(sortBy('name'))

      	return(
            <Route exact path="/search" render={() => (
                <div className="search-books">
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
                        <ol className="books-grid">
                           <BookDetails/>
                        </ol>
                    </div>
                </div>
            )}
      		
        )
    }
}

export default SearchPage