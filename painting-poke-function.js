"use strict";

 export const paintingPoke = () => {
  //Insertando nodo parrafo en el article (carta) con el nombre del Pokemon.
  const paragraphs$$ = document.createElement("p");
  paragraphs$$.classList.add("pokemon-name");
  let objectPokemon = pokemonApi.results[index];
  paragraphs$$.textContent = objectPokemon.name;
  pokeArticle$$.appendChild(paragraphs$$);
  //Insertando nodo imagen (url.) en el article
  const imagePokemons$$ = document.createElement("img");
  imagePokemons$$.classList.add("pokemon-image");
  pokeArticle$$.appendChild(imagePokemons$$);
  const linkImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    index + 1
  }.png`;
  imagePokemons$$.src = linkImage;
  choosingCard(pokeArticle$$);
};
