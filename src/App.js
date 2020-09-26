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
      </header>

    </div>
  );
}

export default App;
