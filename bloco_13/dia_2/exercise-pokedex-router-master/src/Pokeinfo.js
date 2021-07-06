import React from 'react';

class Pokeinfo extends React.Component {
  constructor({ pokemons }){
    super(pokemons)
    this.state = {
      poke: '',
    }
    this.findPoke = this.findPoke.bind(this);
  }

  findPoke() {
    const { pokemons } = this.props
    const { id } = this.props.match.params;
    this.setState({
      poke: pokemons.find((poke) => poke.id === +id),
    })

  }

  componentDidMount(){
    this.findPoke()
  };

  render() {
    const { poke } = this.state;
    return(
      <div>
        <p>{ poke.name }</p>
        <h5>{ poke.type }</h5>
        <img src={poke ? poke.image : "Where is that she*"} alt="salve" />
        <img src={ poke ? poke.foundAt[0].map : "cadê?" } alt="salve2" />
      </div>
    );
  }
}

export default Pokeinfo;