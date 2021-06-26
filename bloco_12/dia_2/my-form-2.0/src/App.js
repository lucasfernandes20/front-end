import './App.css';
import React from 'react';
import Input from './Components/Input';
import Estado from './Components/Estado';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      cidade: '',
      estado: '',
    }

    this.handleChanger = this.handleChanger.bind(this);
    this.verifyFirstIsNumber = this.verifyFirstIsNumber.bind(this);
  }

  handleChanger({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  verifyFirstIsNumber({ target }) {
    const { value, name } = target;
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    nums.forEach((num) => {
      if(value.split('')[0] === num) {
        this.setState({
          [name]: '',
        })
      }
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <Input inputLabel='nome:' inputMaxLength='40' inputName='nome' inputValue={ this.state.nome.toUpperCase() } inputOnChange={ this.handleChanger } />
          <Input inputLabel='email:' inputMaxLength='50' inputName='email' inputValue={ this.state.email } inputOnChange={ this.handleChanger } />
          <Input inputLabel='cpf:' inputMaxLength='11' inputName='cpf' inputValue={ this.state.cpf } inputOnChange={ this.handleChanger } />
          <Input inputLabel='cidade:' inputMaxLength='28' inputName='cidade' inputValue={ this.state.cidade } inputOnChange={ this.handleChanger } inputOnBlur={ this.verifyFirstIsNumber } />
          <Estado selectName='estado' selectValue={ this.state.estado } selectOnChange={ this.handleChanger }/>
        </fieldset>
      </form>
    );
  }
}

export default App;
