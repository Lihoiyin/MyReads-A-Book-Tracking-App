import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Shelves from './components/Shelves';
import Search from './components/Search';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books : [],
}

//call the BookAPI immediately to get book-to-show data
componentDidMount(){
    BooksAPI.getAll()
    .then(res => {
        
        this.setState({books : res})
        console.log(this.state.books);
    })
}

//change the shelf by the bookAPI
changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(res => {
        book.shelf = shelf;
        const updatedBooks = this.state.books.filter(bookInState => bookInState.id !== book.id).concat([book]);
        this.setState({books: updatedBooks});
    })

}
render() {
    return(
      <div>
        {/*https://reactrouter.com/web/guides/philosophy */}
        <Route exact path="/" render={(props) => (
        <Shelves books={this.state.books} 
        changeShelf={this.changeShelf}
        />
        )}/>
        <Route exact path="/search" render={(props) => (
        <Search books={this.state.books} 
        changeShelf={this.changeShelf}
        />
        )}/>
      </div>
      
    );
  }
}

export default BooksApp;
