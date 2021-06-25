import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: '',
      collegeYear: '',
      interested: false,
      why: '',
    }
    this.handleChanger = this.handleChanger.bind(this);
  }

  handleChanger ({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <section>
        <form>
          <label>
            College Year:
            <select name='collegeYear' value={ this.state.collegeYear } onChange={ this.handleChanger }> 
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
            </select>
          </label>
          <label>
            Name:
            <input name='name' type='text' value={ this.state.name } onChange={ this.handleChanger } />
          </label>
          <label>
            Age:
            <input name='age' type='number' value={ this.state.age } onChange={ this.handleChanger } />
          </label>
          <label>
            Are you interested?
            <input name='interested' type='checkbox' value={ this.state.interested } onChange={ this.handleChanger } />
          </label>
          <label>
            Why are you interested?
            <textarea name='why' value={ this.state.why } onChange={ this.handleChanger } />
          </label>
        </form>
      </section>
    );
  }
}

export default App;
