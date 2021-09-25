import React from 'react'
import Book from './Book';

const Shelf = (props) => {
        const {name, books} = props;

        return(
            
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/*
                 map loop to generate the books in books state from Shelves 
                */}
                    {
                        books.map((book)=> <Book book={book} key={book.id} changeShelf={props.changeShelf}/>)
                    }
                    </ol>
                </div>
            </div>
          
        )
    }


export default Shelf;