import React from 'react';
import Welcome from './components/Welcome.js';
//import Table from './components/Table.js';
import './App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Table striped={true} bordered hover >
          <thead>
            <tr>
              <th>assa</th>
              <th>assa</th>
              <th>assa</th>
              <th>assa</th>
            </tr>
            <tr>
              <td>assa</td>
              <td>assa</td>
              <td>assa</td>
              <td>assa</td>
            </tr>
            <tr>
              <td>assa</td>
              <td>assa</td>
              <td>assa</td>
              <td>assa</td>
            </tr>
          </thead>
        </Table>
        <Button variant="danger">ola</Button>
    </div>
  );
}

export default App;
