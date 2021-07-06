import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from "react-router-dom";
import Pokeinfo from './Pokeinfo';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
          <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={ pokemons } />} />
          <Route path="/pokemons/:id" render={(props) => <Pokeinfo { ...props } pokemons={ pokemons } />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;