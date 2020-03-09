import React, { Component } from 'react';
import Card from '../Card/Card';
import './Board.css';

export default class Board extends Component {
  render() {
    return (
      <div className="Board my-0 mx-auto max-w-6xl">
        { this.props.card.map((card) => <Card icon={card.icon} />) }
      </div>
    )
  }
}
