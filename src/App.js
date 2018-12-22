import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import Contact from './Contact'
import './App.css';
import NavBar from './navbar'
import Home from './Home'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Contact" component={Contact}/>
      
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
