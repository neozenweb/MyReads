import React from 'react'
const Book = ({ shelf, thumbnail, title, authors, reviseShelf }) => (
	
			<li>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.state.books.map(bks=>bks.imageLinks ? this.state.books.map(bks=>bks.imageLinks.thumbnail) : ''}")`}}></div>
                    <div className="book-shelf-changer">
                      <select value={this.state.books.map(bks=>bks.shelf)} onChange={evt => this.state.books.map(bks=>bks.changeShelf)(this.state.books, evt)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{this.state.books.map(bks=>bks.title)}</div>
                  <div className="book-authors">{this.state.books.map(bks=>bks.authors) ? this.state.books.map(bks=>bks.authors[0]) : 'No Author'}</div>
                </div>
              </li>
)

export default Book