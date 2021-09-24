import React from 'react'
import Header from './Hearder';
import {Link} from 'react-router-dom'
import Shelf from './Shelf';
import * as BooksAPI from '../BooksAPI';

class Shelves extends React.Component {
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
        //use filter to sort the books from state
        const currentlyReading = this.state.books.filter(book => book.shelf === "currentlyReading");
        const wantToRead = this.state.books.filter(book => book.shelf === "wantToRead");
        const read = this.state.books.filter(book => book.shelf === "read");
        return(
            <div className="list-books">
                <Header/>
                <div className="list-books-content">
                    <div>
                        {/*Pass the books we sorted to the shelves below */}
                        <Shelf name="Currently Reading" books={currentlyReading} changeShelf={this.changeShelf}/>
                        <Shelf name="Want To Read" books={wantToRead} changeShelf={this.changeShelf}/>
                        <Shelf name="Read" books={read} changeShelf={this.changeShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" className="open-search-button">Add a book</Link>
                </div>
          </div>
          
        )
    }
}

export default Shelves;