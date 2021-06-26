import React from 'react';

class Input extends React.Component {
  render() {
    const { inputName, inputValue, inputOnChange, inputMaxLength, inputLabel, inputOnBlur, inputType, inputId } = this.props;
    return (
      <label htmlFor={ inputId }>
        { inputLabel }
        <input id={ inputId } type={ inputType } name={ inputName } value={ inputValue } onChange={ inputOnChange } maxLength={ inputMaxLength } onBlur={ inputOnBlur } required />
      </label>
    );
  }
}

export default Input;