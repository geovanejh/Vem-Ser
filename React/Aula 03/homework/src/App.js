import { useEffect, useState } from 'react';
import axios from 'axios'

import './App.css';
import { Aside } from './Components/Aside';
import { Main } from './Components/Main';
import { Portfolio } from './Components/Portfolio';

function App() {
  const [dados, setDados] = useState('')
  const [repos, setRepos] = useState ([])
  const user = 'geovanejh'

  const setup = async () => {
    try {
      const {data} = await axios.get(`https://api.github.com/users/${user}`)
      setDados(data)
      const {data:repos} = await axios.get(`https://api.github.com/users/${user}/repos`)
      setRepos(repos)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    setup()
  }, []);

  return (
    <div className="container">
      <div className="main-content">
        <Aside url={dados.avatar_url} user={dados.login}/>
        <Main name={dados.name} location={dados.location} company={dados.company} email={dados.email} created_at={dados.created_at} bio={dados.bio}/>
      </div>
      <div className="portfolio">
        <h1>Projetos pessoais: </h1>
        <Portfolio repos={repos}/>
      </div>
    </div>
  );
}

export default App;
