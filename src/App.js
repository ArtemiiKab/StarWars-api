import React,{useState, useEffect} from 'react';
import Nav from './components/Nav';


import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  
  useEffect(()=>{
    function fetchStarShips(){
      fetch("https://swapi.dev/api/starships/")
        .then(res=>res.json())
        .then(res=>setStarships(res.results));
    }

    fetchStarShips()
  }, [])



  return (
    <div className="App">
      <Nav starships={starships} />
    </div>
  );
}

export default App;
