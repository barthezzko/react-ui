import React from 'react';
import Row from './Row.js';

export default class Table extends React.Component {
  render() {
    return <table><tbody><Row value={this.props.value}/><Row  value={this.props.value}/></tbody></table>;
  }
}

