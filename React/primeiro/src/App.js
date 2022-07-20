import './App.css';
import Personal from './components/Personal';
import SayMyName from './components/SayMyName';

function App() {
  const url = "https://via.placeholder.com/150"

  return (
    <>
      <Personal name='Geovane Hartmann' idade={20} profissao='Estagiário' url={url} />
    </>
  );
}

export default App;
