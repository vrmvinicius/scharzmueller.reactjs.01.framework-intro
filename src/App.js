import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Blog from './components/Blog';
import User from './components/User';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <div>
                  <Link to="/">Home</Link> |
                  <Link to="/account">Account</Link> |
                  <Link to="/blog">Blog</Link>
               </div>
               <hr />
               <Route exact path="/" component={User} />
               <Route path="/blog" component={Blog} />
               <Route path="/account" component={Account} />
            </div>
         </Router>
      );
   }
}

export default App;
