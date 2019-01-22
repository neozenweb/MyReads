import React from 'react'
import ReactDOM from 'react-dom'
import Component from 'react'
 import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'
import Books from './Books.js'
import BookShelf from './BookShelf.js'
import App from './App.css'

class BooksApp extends React.Component {
  searchBooks()
{
 //SearchBooks.searchBooks(""); 
   this.setState({showSearchPage:true, books:[]});
}
  state = {
    
    showSearchPage: false,
    books:[]
  }


  render() {
    
      if(this.state.showSearchPage==false)
          {
            return (

               <div className="app">



              <div><button onClick={this.searchBooks.bind(this)}>Search</button></div>
             <Books showSearchPage={false} books={this.state.books}/>


               </div> );
            }
 
    else
        {
             return(
                 
                 <div className="app">

             <SearchBooks showSearchPage={true} books={this.state.books}/>


               </div> );
            
        }
        
        
        
                
    
		}
      
  }
         
export default BooksApp
