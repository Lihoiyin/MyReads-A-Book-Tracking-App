import React from 'react'


const Book = (props) => {

        const {book, changeShelf} = props

            
        return(
            <li key={book.id}>
                <div className="book">
                <div className="book-top">
                    {/*I dont know why but I cant get the imageLinks sometime so we need to check imageLinks is exist or not*/}
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : ""})` }}></div>
                    <div className="book-shelf-changer">
                    <select defaultValue={book.shelf || "none"} onChange={(e) => {changeShelf(book, e.target.value)}}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                {/*I dont know why but I cant get the title and authors sometime so we need to check imageLinks is exist or not*/}
                <div className="book-title">{book.title || "No Title Given"}</div>
                <div className="book-authors">{book.authors || "No Authors Given"}</div>
                </div>
            </li>
        )
    }

export default Book;