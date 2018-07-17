import React from 'react'
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


  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf title='Currently Reading' books ={books.filter(book =>  book.shelf === "currentlyReading")}/>
              <Bookshelf title='Want to Read' books ={books.filter (book =>  book.shelf === "wantToRead")}/>
              <Bookshelf title='Read' books ={books.filter (book =>  book.shelf === "read")}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>

        {this.state.screen === 'list' && (
          <ListBooks onAddBook={this.addBook} books={this.state.currentlyReading}/>
        )}
        {this.state.screen === 'search' && (
          <SearchPage/>
        )}
      </div>
    )
  }
}

export default BooksApp
