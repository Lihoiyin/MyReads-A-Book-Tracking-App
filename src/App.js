import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Shelves from './components/Shelves';
import Search from './components/Search';


class BooksApp extends React.Component {

render() {
    return(
      <div>
        {/*https://reactrouter.com/web/guides/philosophy */}
        <Route exact path="/" component={Shelves}/>
        <Route exact path="/search" component={Search}/>
      </div>
      
    );
  }
}

export default BooksApp;
