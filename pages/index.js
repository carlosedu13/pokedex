import React from 'react';

export async function getStaticProps(context) {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
      .then((response) => {
        if(response.ok) return response.json();
      })
      .then((responseObject) => {
        return responseObject.pokemon_entries;
      })

      return {
        props : {
          pokemons
        },
      }
}


export default function Home(props) {
  const { pokemons } = props;

  return (
    <div>Pokédex
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.entry_number}>
            {pokemon.pokemon_species.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
