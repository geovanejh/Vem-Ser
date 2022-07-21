import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
  const array = [1,2,3]

  return (
    <div className="App">
        {array.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
    </div>
  );
}

export default App;
