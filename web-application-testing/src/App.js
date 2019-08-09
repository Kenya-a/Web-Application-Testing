import React from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './Display'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Display strikes = {2} balls = {3}/>
      </header>

    </div>
  );
}

export default App;
