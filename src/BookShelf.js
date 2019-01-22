import React from 'react'
import Component from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
class BookShelf extends React.Component {
   state = {
        showSearchPage: this.props.showSearchPage,
    books:this.props.books
  }
changeStatus(evnt)
{
  const st =['','currentlyReading','wantToRead','read','none'];
  this.props.books.filter(book=>book.title===evnt.id).map(bknew =>bknew.shelf = st[evnt.selectedIndex]);
this.props.books.filter(bk=>bk.title===evnt.id).map(bk=> BooksAPI.update(bk,st[evnt.selectedIndex]).then(res=>bk.shelf=st[evnt.selectedIndex]).catch(err=>console.log("ERROR")));
this.setState({});
}

  renderBooks = (status) => {
         
    	return this.props.books.map(bk=>bk).filter(book=>book.shelf===status).map(book => {
        
      return (
       
			 <li>
                        <div className="book">
                          <div className="book-top">
        
           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                     </div>

					<div className="book-shelf-changer">

                      <select id={ `${book.title}` } onChange={evt => this.changeStatus(evt.target)}>
                               <option >Select</option>
                               <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
								<option value="none">None</option>
                               </select>
                          
                            </div>
                          </div>
                           <div className="book-title">{ book.title }</div>
                          <div className="book-authors">{ book.authors }</div>
                         
                        </div>
                      </li>


      )
    })
}


  render() {

     if(this.state.showSearchPage == true)
	{
    	return (
        
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
	        <div name="searchShelf" >
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Search Results</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       
                         { this.renderBooks('none') }
                    </ol>
                  </div>
                </div>
              </div>
</div>
</div>
)
}
else
{
	return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
	  
		<div name="currentShelf">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     
                    { this.renderBooks('currentlyReading') }
                    </ol>
                  </div>
                </div>
              </div>
			<div name="readShelf">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     
                    { this.renderBooks('read') }
                    </ol>
                  </div>
                </div>
              </div>
			<div name="wantShelf">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want To Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     
                    { this.renderBooks('wantToRead') }
                    </ol>
                  </div>
                </div>
              </div>
  
</div>
</div>

        )}
}
  
}
export default BookShelf