import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;
