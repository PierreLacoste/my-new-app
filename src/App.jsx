import MyTitle from "./components/MyTitle.jsx";
import MyPokemonCards from "./components/PokemonCards.jsx";
import "./App.css";
import React, { useState } from 'react';

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const [pokemonIndex, setCountpokemonIndex] = useState(0);
    const suivant = () => {setCountpokemonIndex (pokemonIndex + 1)};
        const precedent = () => {setCountpokemonIndex (pokemonIndex - 1)};
  return (
    
    <div>
      <MyPokemonCards pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 ? <button onClick ={precedent}>Précédent</button > : ""}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick ={suivant}>Suivant</button > : ""}
      
    </div>
  );
}


export default App
