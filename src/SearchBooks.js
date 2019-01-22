import React from 'react'
import Component from 'react'
import Books from './Books'
import BookShelf from './BookShelf.js'
import App from './App.js'
import * as BooksAPI from './BooksAPI'
var flagqry = false;
class SearchBooks extends React.Component {
  
  state = {
        showSearchPage: true,
         books:[]
  }
  
  
  
searchBooks(qry)
{
 
  if(qry.length > 0)
  {
  

 BooksAPI.search(qry,20).then(res=>this.setState({books:res}))
                 .catch(err => console.log(err));
    if(this.state.books.length > 0)
       {
			this.setState({books:this.state.books.filter(bk=>bk.hasOwnProperty('shelf')== false)
                   .map((books) => {return {...books, 'shelf':'none'}})});
}
     this.state.books.map(bk=>BooksAPI.update(bk,'none').then(res=>console.log("SETTING Status for " + bk.title )).catch(err=>console.log("ERROR")));
                                 
  }
  else
  {
    this.setState({books:[]});
   }
}
 changeStatus(evnt,bk)
{
    
    alert("updating status of "+bk);
  const st =['','currentlyReading','wantToRead','read','none'];
 /*this.state.books.filter(book=>book.title===evnt.id).map(bknew =>bknew.shelf = st[evnt.selectedIndex]);
 this.state.books.filter(bk=>bk.title===evnt.id).map(bk=> BooksAPI.update(bk,st[evnt.selectedIndex]).then(bk=>bk).catch(err=>console.log("ERROR")));
   this.setState({});                         
 */
    
    BooksAPI.update(bk,st[evnt.selectedIndex])
        .then(res=>console.log("updated status for " +bk))                                             
         .catch(err=>console.log("ERROR in updating status for "+bk));
   this.setState({}); 
    
}
myPage(){

  this.setState({showSearchPage: false, books:[]});
}

 renderBooks = () => {
   
   
return this.state.books.filter(bk=>bk.shelf!='read'&&bk.shelf!='wantToRead'&&bk.shelf!='currentlyReading').map(book => {
             if(book.imageLinks.thumbnail.length==0) book.imageLinks.thumbnail='';
        
      return (
       
			 <li>
                        <div className="book">
                          <div className="book-top">
        
           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                     </div>

					<div className="book-shelf-changer">

                      <select id={ `${book.title}` } onChange={evt => this.changeStatus(evt.target,`${book.id}`)}>
                              <option >Select</option>
                               <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
						     </select>
                          
                            </div>
                          </div>
                           <div className="book-title">{ book.title }</div>
                          <div className="book-authors">{ book.authors }</div>
                         
                        </div>
                      </li>


      )
}
)}

render() {
  
if(this.state.showSearchPage==true)
{
    return (
 		<div className="search-books">
            <div className="search-books-bar">
          			<a className="close-search" onClick={this.myPage.bind(this)}>Close</a>
			
              <div className="search-books-input-wrapper" >
                <input type="text" placeholder="Search by title or author" onChange={evt => this.searchBooks(evt.target.value)}/>
	

	<div className="list-books">

            <div className="list-books">
            <div className="list-books-content">
	        <div name="searchShelf" >
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Search Results</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       
					{this.renderBooks()}

                    </ol>
                  </div>
                </div>
  </div>
</div>
</div>
</div>
</div>	
</div>
</div>
	
			
)
}
else{

   return(<App showSearchPage={false} books={[this.state.books]}/>);


}
         
}

       
}

export default SearchBooks
  
