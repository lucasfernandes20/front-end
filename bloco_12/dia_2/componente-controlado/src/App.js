import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label>
            <select></select>
          </label>
          <label>
            <input type='text' />
          </label>
          <label>
            <input type='number' />
          </label>
          <label>
            <textarea></textarea>
          </label>
        </form>
      </section>
    );
  }
}

export default App;
