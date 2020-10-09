import React from 'react';
import Row from './Row.js';
import Cell from './Cell.js';
//import {orders} from './assets/orders.js';

export default class DataTable extends React.Component {


  state = { loading: true, orders: [] };

  async componentDidMount() {
    const orderUrl = 'http://localhost:3001/orders';
    const response = await fetch(orderUrl);
    const data = await response.json();
    this.setState({ orders: data.payload.orders, loading: false })
  }
  render() {
    return <div>
      <table className="table table-hover table-bordered table-sm table-striped">
        <thead>

          <th>#</th>
          <th>ID</th>
          <th>UserID</th>
          <th>Platform</th>
          <th>OrderType</th>
          <th>Platinum</th>
          <th>ModRank</th>
        </thead>
        <tbody>
          {this.state.loading ? <div>...loading...</div> : this.state.orders.map((order, index) => (<Row order={order} index={index} />))}
        </tbody>
      </table></div>;
  }
}

