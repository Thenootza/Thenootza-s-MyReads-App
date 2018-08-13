import React, { Component } from 'react'
import MyList from './MyList'

class MyBooks extends Component {
  render() {
    return (
      <div>
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
              <div>
                  <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">

                      </div>

                      <h2 className="bookshelf-title">Want To Read</h2>
                      <div className="bookshelf-books">

                      </div>

                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">

                      </div>

                  </div>
              </div>
          </div>
          </div>
    )
  }
}

export default MyBooks
