import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
  render() {
    return (
      <div className="home">
      <img className="img" src='https://images.pexels.com/photos/1401796/pexels-photo-1401796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='Home'/>
      <div className='info'>
      <h1 className="h1">This App Was Created by H3xor Team</h1>
      <h2 className="h2">NavBar , React Rooter ,Pages: Home ; Contact</h2>
      </div></div>
    );
  }
}

export default Home;