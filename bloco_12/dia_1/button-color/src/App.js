import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      numeroClick: 0,
    }
    this.contaClick = this.contaClick.bind(this);
  }

  contaClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroClick: estadoAnterior.numeroClick + 1,
    }))
    this.mudaCor(this.state.numeroClick);
  }

  mudaCor(clicks) {
    if(clicks % 2 !== 0) {
      console.log('cor vermelha')
    } else {
      console.log('cor verde')
    }
  }

  render() {
    return (
      <button onClick={this.contaClick}>{this.state.numeroClick}</button>
    );
  }
}

export default App;
