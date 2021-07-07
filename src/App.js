import logo from './logo.svg';
import './App.css';
import {useState}  from 'react';
import axios from 'axios';

function App() {
  const [topHead, setTopHead] = useState([])

  const allpoke = (e) => {
    console.log("click!!!")
    // fetch("http://www.example.com")
    // .then(response =>{
    //     //do something
    // }).catch(err => {
    //     console.log(err);
    // })

    axios.get ("https://pokeapi.co/api/v2/pokemon")
    .then(pokemon => {
      setTopHead(pokemon.data.results);
    })
    .catch(err=>{
            console.log(err);
    });

    // fetch("https://pokeapi.co/api/v2/pokemon")
    //       .then(response => {
    //         return response.json();
      //   }).then(response => {
      //       console.log(response)
      //       setTopHead(response.results);
      //   }).catch(err=>{
      //       console.log(err);
      //   });
      }



  return (
    <div className="App">
      <button onClick = {allpoke}>Fetch Pokemon!!!</button>
      {topHead.map((pokemon, idk) => {
        return <h1>{pokemon.name}</h1>
      })}
    </div>
  );
}

export default App;
