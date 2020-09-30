import React from 'react';
import { Link } from 'next';

export async function getStaticProps() {
	const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
		.then((response) => {
			if(response.ok) return response.json();

			throw new Error('Unexpected error');
		})
		.then((responseObject) => {
			return responseObject.pokemon_entries;
		})

	return {
        props : {
			pokemons
        }
	}
}


export default function Home(props) {
	const { pokemons } = props;

	return (
		<div>Pokédex
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/sobre">
						<a>Sobre o projeto</a>
					</Link>
				</li>
			</ul>

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
