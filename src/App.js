import React, { Component } from 'react';
import Header from './Header/Header';
import Board from './Board/Board';
import BuildCard from './utils/BuildCard';
import './App.css';

const getInitialState = () => {
  const card = BuildCard();
  return {
    card,
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }
  render() {
    return (
      <div className="App bg-black h-screen">
        <Header />
        <Board 
          card={this.state.card}
        />
      </div>
    );
  }
}

export default App;
