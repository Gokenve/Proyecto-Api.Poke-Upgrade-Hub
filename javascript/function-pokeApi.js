'use srict';

export const lauchingFetch = async function() {
    const pokemonsApi = await fetch('https://pokeapi.co/api/v2pokemon?offset=0&limit=100,"previous","results"');
    const pokemonApi = await pokemonsApi.json();
    return pokemonsApi
}

