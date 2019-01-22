import React from 'react'
import ReactDOM from 'react-dom'
import Component from 'react'
 import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'
import Books from './Books.js'
import BookShelf from './BookShelf.js'
import App from './App.css'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class BooksApp extends React.Component {
  
  state = {
    
    showSearchPage: false,
    books:[]
  }

searchBooks()
{
 SearchBooks.searchBooks(); 
}
  render() {
    return (
         <Router>    
       <div className="app">
       
          
     
      <div><Link to="/SearchBooks"  ><button >Search</button></Link></div>
     
      <Switch>
        <Route exact path="/"  component={Books}/>
        <Route  exact path="/SearchBooks" component={SearchBooks} />
         <Route  exact path="/BookShelf" component={BookShelf} render={() => (<BookShelf books={this.state.books} showSearchPage={this.state.showSearchPage} />)}  />
		 
 
		
      </Switch>

       </div> 
  </Router>
    
        
        
        
                
      
        
        )
		}
      
  }
         
export default BooksApp
