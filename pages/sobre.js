import React from 'react';
import { Link }  from 'next';

export default function Sobre() {
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
            <p>Uma pokédex para você poder explorar e conhecer os pokemons menos conhecidos</p>
        </div>
    );
}
