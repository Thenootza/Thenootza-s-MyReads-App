import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import MyBooks from './MyBooks'
import MyList from './MyList'


class BooksApp extends React.Component {
  state = {
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
          <MyBooks books={this.state.books} shelfChanger={this.shelfChanger} />}
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
