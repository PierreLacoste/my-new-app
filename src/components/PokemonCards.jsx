import PropTypes from "prop-types";

function MyPokemonCards({pokemon}) {
  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

MyPokemonCards.propTypes = {
  pokemon: PropTypes.shape({
  name : PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  }).isReqsuired,
}

export default MyPokemonCards