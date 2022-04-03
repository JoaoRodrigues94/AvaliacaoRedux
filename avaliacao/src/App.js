import react from 'react';
import './App.css';
import Sorteio from '../src/Components/Sorteio';
import Recesso from '../src/Components/Recesso';
import Propriedades from '../src/Components/Propriedades';
import Numero from '../src/Components/Numero';
import Desafio from '../src/Components/Desafio';

function App() {
  return (
    <div className="App">
      <h1>Projeto Avaliativo React-Redux 1° Bimestre</h1>
      <div className='row'>
        <Desafio/>
      </div>
      <div className='row'>
        <Numero/>
      </div>
      <div className='row'>
        <Propriedades titulo='Qual sua nota?' 
        aluno='João Paulo Fernandes Rodrigues'/>
      </div>
      <div className='row'>
        <Sorteio/>
      </div>
      <div className='row'>
        <Recesso/>
      </div>
    </div>
  );
}

export default App;
