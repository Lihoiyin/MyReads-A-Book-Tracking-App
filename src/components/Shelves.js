import React from 'react'
import Header from './Hearder';
import {Link} from 'react-router-dom'
import Shelf from './Shelf';


const Shelves = (props) => {
        const {books, changeShelf} = props;
        //use filter to sort the books from state
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
        const wantToRead = books.filter(book => book.shelf === "wantToRead");
        const read = books.filter(book => book.shelf === "read");
        return(
            <div className="list-books">
                <Header/>
                <div className="list-books-content">
                    <div>
                        {/*Pass the books we sorted to the shelves below */}
                        <Shelf name="Currently Reading" books={currentlyReading} changeShelf={changeShelf}/>
                        <Shelf name="Want To Read" books={wantToRead} changeShelf={changeShelf}/>
                        <Shelf name="Read" books={read} changeShelf={changeShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" className="open-search-button">Add a book</Link>
                </div>
          </div>
          
        )
    }


export default Shelves;