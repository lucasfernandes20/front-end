import './App.css';

const Task = (Value) => {
  return (
    <li>{Value}</li>
  );
}

const compromissos = ['Arrumar cama', 'Tomar café', 'Escovar dentes', 'Fazer exercícios', 'Tomar banho', 'Lavar louça', 'Almoçar', 'Estudar'];

function App() {
  return (
    <ul>{ compromissos.map((compromisso) => Task(compromisso))}</ul>
  );
}

export default App;
