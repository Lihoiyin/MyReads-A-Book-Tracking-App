import React from 'react'
import Book from './Book';

class Shelf extends React.Component {

    render() {
        const {name, books} = this.props;
        console.log(books);
        return(
            
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {/*
                 map loop to generate the books in books state from Shelves 
                */}
                    {
                        books.map((book, key)=> <Book book={book} key={key} changeShelf={this.props.changeShelf}/>)
                    }
                    </ol>
                </div>
            </div>
          
        )
    }
}

export default Shelf;