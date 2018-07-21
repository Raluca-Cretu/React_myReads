import React from 'react'
import { Route, Link } from 'react-router-dom'
import ListBook from './ListBook'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BookDetails from './BookDetails'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }


  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBook books={this.state.books}
                    onUpdateShelf={(books, shelf) => this.updateShelf(book, shelf)}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
