import React, { Component } from 'react'
import BookDetails from './BookDetails'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
 

class SearchPage extends Component {
    state = {
        query: '',
        showingBooks: []
    }

    updateQuery = (query) => {
     	this.setState({
            query: query.trim()
        })
        let searchingBooks = []
        if (query) {
            BooksAPI.search(query).then(response => {
                if (response.length) {
                    const match = new RegExp (escapeRegExp(query), 'i')
                    showingBooks = books.filter((books) => match.test(books.name))
                    }
                } this.setState ({showingBooks})
                }
            })
        } else {
            this.setState ({showingBooks})
          }
        showingBooks.sort(sortBy('name'))
    }

    render() {
      	const { query } = this.state

      	return(
            <Route exact path="/search" render={() => (
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
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

                        </ol>
                    </div>
                </div>
            )} />


        )
    }
}

export default SearchPage