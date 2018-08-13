import React, { Component } from 'react'

class MyList extends Component {
  render() {
    const {books}=this.props;
    return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover">

                        </div>
                        <div className="book-shelf-changer">
                            <select value={books.shelf ? books.shelf : "none"}>
                                <option value="move" >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{books.title}</div>
                    <div className="book-authors">{books.authors}</div>
                </div>
    )
  }
}

export default MyList