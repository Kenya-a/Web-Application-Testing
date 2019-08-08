import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Dashboard from './Dashboard'
import Display from './Display'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Display/>
        {/* <Dashboard/>
         */}
      </header>

    </div>
  );
}

export default App;
