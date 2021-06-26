import React from 'react';

class Option extends React.Component {
  render() {
    const { optionValue, conteudo } = this.props;
    return (
      <option value={ optionValue }>{ conteudo }</option>
    );
  }
}

export default Option;