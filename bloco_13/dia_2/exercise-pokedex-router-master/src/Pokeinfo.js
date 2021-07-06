import React from 'react';
import './pokeinfo.css';
import { Link } from 'react-router-dom';

class Pokeinfo extends React.Component {
  constructor(props){
    super(props)

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
        <div className="info-div">
          <div>
            <p>{ poke.name }</p>
            <p>{ poke.type }</p>
            <p>
              Weight: { poke ? poke.averageWeight.value : "Aguarde..."} 
              { poke ? poke.averageWeight.measurementUnit : "Aguarde..."}
            </p>
            <Link to="/"><span>Back home</span></Link>
          </div>
          <img className="poke-img" src={poke ? poke.image : "Sem pokemons por enquanto!"} alt="Imagem do pokemon" />
        </div>
        <img src={poke ? poke.foundAt[0].map : "Aguarde..."} alt="salve2" />
      </div>
    );
  }
}

export default Pokeinfo;
