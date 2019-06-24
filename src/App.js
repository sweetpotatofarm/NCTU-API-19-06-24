import React from 'react';
import Navbar from './navbar.js';
import Searchpage from './searchpage.js';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route path='/' component={ Navbar }/>
          <Switch>
            {/*<Route exact path='/' component={ Home }/>*/}
            <Route path='/search' component={ Searchpage }/>
            {/*<Route component={ NotFound }/>*/}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
