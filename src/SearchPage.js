import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render(){
    const { books } = this.props
    const { query } = this.state

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <input
            className='search-books-input-wrapper'
            type='text'
            placeholder='Search books'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link
            to='/'
            className='close-search'
          >Close</Link>
        </div>
      </div>
    )
  }
}

export default SearchPage
