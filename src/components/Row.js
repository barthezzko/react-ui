import React from 'react';
import Cell from './Cell.js';

export default class Row extends React.Component {
  render() {
    return <tr><Cell value={this.props.value}/></tr>;
  }
}

