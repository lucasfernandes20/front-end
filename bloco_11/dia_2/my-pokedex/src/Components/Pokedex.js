import React from 'react';
import data from '../data';
import Pokemons from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <section className='pokedex'>
        {data.map((pokemon) => <Pokemons data={pokemon}/>)}
      </section>
    );
  }
}

export default Pokedex;