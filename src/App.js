import React from 'react';
import logo from './logo.svg';
import Welcome from './components/Welcome.js';
import Table from './components/Table.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Mike"/>
        <Table value="asdf"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
