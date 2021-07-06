import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Pokeinfo from './Pokeinfo';
import About from './About'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
          <nav className="nav">
          <Link to="/about"><h5>What is a pokedex?</h5> </Link>
          <Link to="/"><h5>Back Home</h5></Link>
          </nav>
          <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={ pokemons } />} />
          <Route path="/pokemons/:id" render={(props) => <Pokeinfo { ...props } pokemons={ pokemons } />} />
          <Route path="/about" component={ About } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;