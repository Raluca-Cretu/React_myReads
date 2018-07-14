import React from 'react'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
     /**
    currentlyReading: [],
    wantToRead: [],
    read: []
    showSearchPage: false*/
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

/*
  getBooks () {
    BooksAPI.getAll().then((books) => {

      let currentlyReading = books.filter(book => book.shelf);
      let wantToRead = books.filter(book => book.shelf);
      let read = books.filter(book => book.shelf)
      this.setState({ currentlyReading, wantToRead, read });
  }
*/
  addBook = (book) => {
    this.setState ((state) => ({
      books: state.books.filter((b) => b.id === book.id)
    }))
  }

  render() {
    return (
      <div>
        <ListBooks onAddBook={this.addBook} books={this.state.currentlyReading}/>
        <ListBooks books={this.state.wantToRead}/>
        <ListBooks books={this.state.read}/>
      </div>
    )
  }
}

export default BooksApp
