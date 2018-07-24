import React from 'react'
import { Route } from 'react-router-dom'
import ListBook from './ListBook'

import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'



class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  updateShelf = (book, Shelf) => {
    BooksAPI.update(book, Shelf).then((data) => {
      book.shelf = Shelf
      let updateBooks = this.state.books.filter((b) => b.id !== book.id)
      updateBooks.push(book)
      this.setState({books: updateBooks})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBook books={this.state.books}
                    onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)} />
        )} />
        <Route exact path="/search" render={() => (
          <SearchPage books={this.state.books}
                    onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)} />
        )} />
      </div>
    )
  }
}

export default BooksApp
