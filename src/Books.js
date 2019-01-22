import React from 'react'
import {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf.js'
const resultSet=[]
class Books extends React.Component {
   state = {
        showSearchPage: false,
    books:[]
  }

componentDidMount(){
	console.log("component mounted");
 BooksAPI.getAll().then(res=>console.log(res));
BooksAPI.getAll().then(res=>this.setState({books:res}))
                   .catch(err => console.log(err));
  
}

 changeStatus(evnt)
{
  const st =['currentlyReading','wantToRead','read','none']
  //console.log("changed status is  " +st[evnt.selectedIndex] +"  title is "+evnt.id);
this.state.books.map(book =>book).filter(book=>book.title===evnt.id).map(bknew =>bknew.shelf = st[evnt.selectedIndex]);


BooksAPI.update(this.state.books.filter(book=>book.title===evnt.id),st[evnt.selectedIndex])
			.then(res=>this.state.books.filter(book=>book.id===res.id).map(bknew =>bknew.shelf = res.shelf))
                    .catch(err => console.log(err));
this.setState({books:this.state.books.map(bk=>bk).filter(bk=>bk.shelf!="none")})
this.state.books.map(bk=>console.log("BOOKS AFTER UPDATE " +bk.title));

}
   

 render(){
  
 return     (<BookShelf  books={this.state.books}/>)
  	 
   }
  
}
export default Books
