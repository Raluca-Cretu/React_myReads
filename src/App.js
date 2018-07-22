import React from 'react'
import { Route } from 'react-router-dom'
import ListBook from './ListBook'
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

  updateShelf = (book) => {
     this.setState((state) => ({
      books: state.books.filter((b) => b.id !== books.id)
     }))
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBook books={this.state.books}
                    onUpdateShelf={(book, shelf) => this.updateShelf(book, shelf)} />
        )} />
      </div>
    )
  }
}

export default BooksApp
