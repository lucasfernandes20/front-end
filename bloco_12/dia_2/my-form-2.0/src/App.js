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
      tipo: '',
      completed: false,
    }

    this.handleChanger = this.handleChanger.bind(this);
    this.verifyFirstIsNumber = this.verifyFirstIsNumber.bind(this);
    this.showOnScreen = this.showOnScreen.bind(this);
    this.print = this.print.bind(this);
    this.clearFunc = this.clearFunc.bind(this)
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

  showOnScreen() {
    this.setState({
      completed: true,
    })
  }

  print() {
    const { nome, email, cpf, cidade, estado, tipo } = this.state;
    return (
    <section>
      <h3>{ nome }</h3>
      <p>{ email }</p>
      <p>{ cpf }</p>
      <p>{ cidade }</p>
      <p>{ estado }</p>
      <p>{ tipo }</p>
    </section>
    );
  }

  preventFunc(e) {
    e.preventDefault();
  }

  clearFunc() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      cidade: '',
      estado: '',
      tipo: '',
      completed: false,
    })
  }

  render() {
    return (
      <form onSubmit={ this.preventFunc }>
        <fieldset>
          <Input inputType='text' inputLabel='nome:' inputMaxLength='40' inputName='nome' inputValue={ this.state.nome.toUpperCase() } inputOnChange={ this.handleChanger } />
          <Input inputType='text' inputLabel='email:' inputMaxLength='50' inputName='email' inputValue={ this.state.email } inputOnChange={ this.handleChanger } />
          <Input inputType='text' inputLabel='cpf:' inputMaxLength='11' inputName='cpf' inputValue={ this.state.cpf } inputOnChange={ this.handleChanger } />
          <Input inputType='text' inputLabel='cidade:' inputMaxLength='28' inputName='cidade' inputValue={ this.state.cidade } inputOnChange={ this.handleChanger } inputOnBlur={ this.verifyFirstIsNumber } />
          <Estado selectName='estado' selectValue={ this.state.estado } selectOnChange={ this.handleChanger }/>
          <div>
            <Input inputId='casa' inputType='radio' inputLabel='casa:' inputName='tipo' inputValue='casa' inputOnChange={ this.handleChanger }/>
            <Input inputId='apartamento' inputType='radio' inputLabel='apartamento:' inputName='tipo' inputValue='apartamento' inputOnChange={ this.handleChanger }/>
          </div>
          <button onClick={ this.showOnScreen } >Me mostre os dados!</button>
          <div>{ this.state.completed ? this.print() : '' }</div>
          <button onClick={ this.clearFunc }>Apagar os dados</button>
        </fieldset>
      </form>
    );
  }
}

export default App;
