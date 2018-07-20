import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    screen: 'list',
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  changeShelf = ()

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <ListBooks title='Currently Reading' books ={books.filter(book =>  book.shelf === "currentlyReading")}/>
              <ListBooks title='Want to Read' books ={books.filter (book =>  book.shelf === "wantToRead")}/>
              <ListBooks title='Read' books ={books.filter (book =>  book.shelf === "read")}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
        <Route exact path="/" render={() => (
          <ListBooks/>
        )}
      </div>
    )
  }
}

export default BooksApp
