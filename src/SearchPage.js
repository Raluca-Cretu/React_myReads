import React, { Component } from 'react'
import BookDetails from './BookDetails'
import ListBook from './ListBook'
import './App.css'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {Route, Link} from 'react-router-dom'

class SearchPage extends Component {
    state = {
        books: [],
        query: '',
        showingBooks: []
    }


    updateQuery = (query) => {
     	this.setState({
            query: query.trim()
        })
        let showingBooks = []
        let books
        if (query) {
            BooksAPI.search(query).then(response => {
                if (response.length) {
                    const match = new RegExp (escapeRegExp(query), 'i')
                    showingBooks = books.filter((books) => match.test(books.name))
                    } else {
                       this.setState ({showingBooks})
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
                            {this.state.showingBooks.map((book) => (
                                <BookDetails book={book}
                                    onUpdateBook={(book,shelf) => this.updateShelf(book,shelf)}/>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            )} />
        )
    }
}

export default SearchPage