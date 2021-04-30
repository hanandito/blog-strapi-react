import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/blog/bloglist';
import SingleBlog from './components/blog/singleblog';
const App = ()=> {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route exact path='/single/:postid' render={ props=> (
            <SingleBlog {...props}/>
          )}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
