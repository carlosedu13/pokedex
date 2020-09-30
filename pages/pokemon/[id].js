import React from 'react';

export default function Pokemon({ pokemon }){
    return (
        <div>
            <img src={pokemon.sprites.front_default} alt="Foto de um pokémon" />
        </div>
    );
}

export async function getStaticProps({ params }) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/2/${params.id}`)
        .then((response) => {
            if(response.ok) return response.json();

            throw new Error('Unexpected error');
    })
    .then((responseObject) => {
        return responseObject;
    })

    return {
        props: {
            pokemon
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            },
            {
                params: {
                    id: '2'
                }
            },
            {
                params: {
                    id: '3'
                }
            },
        ],
        fallback: false
    }
}