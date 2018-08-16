import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import MyBooks from './MyBooks'
import MyList from './MyList'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [],
   };

     componentDidMount (){
       BooksAPI.getAll().then((books)=> {
       this.setState({ books })
     })
   };

     shelfChanger=(book, shelf)=>{
       BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(item => item.id !== book.id).concat([book])
        }))
      })
    };

  render() {
    return (
      <div>
        <Route exact path="/" render={() =>
          <MyBooks books={this.state.books}  />}
          />

        <Route exact path="/SearchPage" render={() =>
          <SearchPage> </SearchPage>}
          />

          <Route exact path="/MyList" render={() =>
          <MyList> </MyList>}
          />
      </div>
    )
  }
}

export default BooksApp
