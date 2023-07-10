import logo from './logo.svg';
import './App.css';
import Post from './components/post';
import { useState } from 'react';

function App() {
  const [pokemonName, setPokemonName] = useState([])


  const getList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=808&offset=0')
      .then(res => res.json())
      .then((data)=> setPokemonName(data))
      .catch(err => {
        console.log(err)
      })
  }






  return (
    <div className="App">
    <h1>Pokemon List</h1>


    <button onClick={getList} className='bigButton' >Catch em All</button>

    <Post name={pokemonName}/>
    
    </div>
  );
}

export default App;
