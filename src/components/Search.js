import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import debounce from 'lodash.debounce';

class Search extends React.Component {
    constructor(props) {
    super(props);
    this.inputSearchDebounced = debounce(this.inputSearch, 250);
    this.state = {
        query: "",
        foundbooks: [],

    }
  }
    

    //set the query state when we change in input
    inputUpdate = (value) => {
        /*https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback, 
        setState works in an asynchronous way. That means after calling setState the this.state variable is not immediately changed.
        so we need to use callback function here*/
        this.setState({query : value},this.inputSearch);
    }

    //after we set the query state, call the api immediately.
    //check the query empty, undefined or not, if we dont get the result just return [] to the books state
    inputSearch = () => {
        if (this.state.query === "" || this.state.query === undefined){
           return this.setState({foundbooks: []})
        }
        BooksAPI.search(this.state.query.trim())
        .then(res => {
            if (res.error){
                return this.setState({foundbooks: []})
            }else{
                return this.setState({foundbooks: res})
                
            }
        })
    }


    render() {
        /*by Udacity Suggestion */
            const validatedBooks = this.state.foundbooks.map((searchedBook) => {
            const myBook = this.props.books.filter((myBook) => (myBook.id === searchedBook.id))[0]
            searchedBook.shelf = myBook ? myBook.shelf : "none"
            return searchedBook})
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(e) => {this.inputUpdate(e.target.value);}}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                                  {/*
                 map loop to generate the books we searched 
                */}
                    {
                        validatedBooks.map(book=> <Book book={book} key={book.id} changeShelf={this.props.changeShelf}/>)
                    }
              </ol>
            </div>
          </div>
          
        )
    }
}

export default Search;