import React, { Component } from 'react'
import MyList from './MyList'
import PropTypes from "prop-types";


class MyBooks extends Component {
  static propTypes = {
        books: PropTypes.array.isRequired,

    };
  render() {
    const {books}=this.props;
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
                            <MyList  key={books.id} books={books}/>

                          )}
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>


                      <div className="bookshelf-books">
                      {books.filter((books) => books.shelf === "wantToRead").map((books) =>
                          <MyList  key={books.id} books={books}/>

                        )}
                      </div>
                      <h2 className="bookshelf-title">Want To Read</h2>


                      <div className="bookshelf-books">
                        {books.filter((books) => books.shelf === "Read").map((books) =>
                          <MyList  key={books.id} books={books}/>

                        )}
                        <h2 className="bookshelf-title">Read</h2>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          </div>
    )
  }
}

export default MyBooks
