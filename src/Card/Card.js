import React, { Component } from 'react'

import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <div className="Card h-40 w-32">
        <div className="Card-inner">
          <div className="cover rounded h-40 w-32 bg-yellow-400"></div>
          <div className="content rounded h-40 w-32 flex items-center justify-center bg-blue-300">
            <i className={`fa ${this.props.icon} fa-5x`}></i>
          </div>
        </div>
      </div>
    )
  }
}
