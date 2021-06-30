import React from 'react';
import Option from './Option'

class Select extends React.Component {
  render() {
    const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
    const { selectOnChange, selectName, selectValue } = this.props;
    return (
      <label>
        Estado:
        <select value={ selectValue } onChange={ selectOnChange } name={ selectName } required>
          {estados.map((estado) => <Option key={ estado } optionValue={ estado } conteudo={ estado } />)}
        </select>
      </label>
    );
  }
}

export default Select;