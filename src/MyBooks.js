import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MyList from './MyList'


class MyBooks extends Component {
    state = {
      query: ''
    }

    updateQuery = (query) => {
      this.setState({ query: query.trim() })
    }

    clearQuery = () => {
      this.setState({ query: '' })
    }

  render() {
    const { query } = this.state
    const {books, shelfChanger}=this.props;
    return (
      <div>
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
              <div>
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
                </div>
              </div>
              <div className='search-books'>
                <div className='search-books-bar'>
                  <input
                    className='search-books-input-wrapper'
                    type='text'
                    placeholder='Search books'
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                  />

                  <Link to='/SearchPage' className='open-search'>Search</Link>
                </div>
              </div>
          </div>
    )
  }
}

export default MyBooks
