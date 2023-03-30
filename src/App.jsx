import MyTitle from "./components/MyTitle.jsx";
import MyPokemonCards from "./components/PokemonCards.jsx";
import "./App.css";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    
    <div>{
      pokemonList.map(i => (
        <MyPokemonCards pokemon={i}/>

      ))}
      
    </div>
  );
}

export default App;
