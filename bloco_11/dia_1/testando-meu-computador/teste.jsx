const concatenaNome = (nome, sobrenome) => `${nome} + ${sobrenome}`;

const className = 'teste_JSX'
const sayHi = <h1 className={className}>Hello, {concatenaNome('Lucas', 'Fernandes')}</h1>;