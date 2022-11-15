'use srict';


export const pokemonsApi = await fetch('https://pokeapi.co/api/v2pokemon?offset=0&limit=100,"previous","results"');
export const pokemonApi =  await pokemonsApi.json();
