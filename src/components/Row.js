import React from 'react';
import Cell from './Cell.js';

export default class Row extends React.Component {
  render() {
    return <tr>
                <Cell value={this.props.index}/>
                <th>{this.props.order.id}</th>
                <Cell value={this.props.order.user.id}/>
                <Cell value={this.props.order.platform}/>
                <Cell value={this.props.order.order_type}/>
                <Cell value={this.props.order.platinum}/>
                <Cell value={this.props.order.mod_rank}/>
            </tr>;
  }
}

