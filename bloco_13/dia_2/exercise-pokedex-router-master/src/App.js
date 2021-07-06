import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
          <Router path="/">
            <Pokedex />
          </Router>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;