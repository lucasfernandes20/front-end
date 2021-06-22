import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.data;

    return (
      <section>
        <div className='pokemon'>
          <h2>{name}</h2>
          <span>{type}</span>
          <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
          <img src={image} alt={name}></img>
        </div>
      </section>
    );
  }
}

export default Pokemon;