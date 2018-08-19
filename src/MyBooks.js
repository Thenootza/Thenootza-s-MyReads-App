import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyList from './MyList'


class MyBooks extends Component {
  render() {
    const { books, shelfChanger }=this.props;

    return (
      <div>
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div className="bookshelf-books">
              <div className="books-grid">
                {books.filter((books) => books.shelf === "currentlyReading").map((books) =>
                  <MyList  key={books.id} books={books} shelfChanger={shelfChanger}/>

                )}
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    {books.filter((books) => books.shelf === "wantToRead").map((books) =>
                      <MyList  key={books.id} books={books} shelfChanger={shelfChanger}/>

                    )}
                  </div>
                  <h2 className="bookshelf-title">Want To Read</h2>
                  <div className="bookshelf-books">
                    {books.filter((books) => books.shelf === "read").map((books) =>
                      <MyList  key={books.id} books={books} shelfChanger={shelfChanger}/>

                    )}
                  <h2 className="bookshelf-title">Read</h2>
                  </div>
                </div>
              </div>
              <div className='open-search'>
                <Link to='/SearchPage' onClick={() => this.setState({ showSearchPage: true })}>Add</Link>
              </div>
            </div>
          </div>
    )
  }
}

export default MyBooks
