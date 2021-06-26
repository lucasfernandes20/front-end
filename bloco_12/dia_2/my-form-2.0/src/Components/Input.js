import React from 'react';

class Input extends React.Component {
  render() {
    const { inputName, inputValue, inputOnChange, inputMaxLength, inputLabel, inputOnBlur } = this.props;
    return (
      <label>
        { inputLabel }
        <input name={ inputName } value={ inputValue } onChange={ inputOnChange } maxLength={ inputMaxLength } onBlur={ inputOnBlur } required />
      </label>
    );
  }
}

export default Input;