"use strict";
// Trayendo response de Pokemons de la api---------------
//for (let id = 1; id <= 66; id++) {
  const pokemonsApi = await fetch('https://pokeapi.co/api/v2/pokemon');
  const pokemonApi = await pokemonsApi.json();
//}
// Creación de nodos primarios y sus clases en el documento de HTML-----------
const header$$ = document.createElement("header");
header$$.classList.add("header");
document.body.appendChild(header$$);
const divBackground$$ = document.createElement('div');
divBackground$$.classList.add("background-header");
header$$.appendChild(divBackground$$);

const imagePokeBall$$ = document.createElement('img');
imagePokeBall$$.classList.add("poke-ball");
imagePokeBall$$.src = "https://www.clipartmax.com/png/small/129-1298328_pokeball-pokemon-ball-hd-images-free-png-image-pokebola-png.png";
header$$.appendChild(imagePokeBall$$);

const logoPokemon$$ = document.createElement('img');
logoPokemon$$.classList.add("pokemon-logo");
logoPokemon$$.src = './Images/Pokemon-logo.png';
header$$.appendChild(logoPokemon$$);

const main$$ = document.createElement("main");
document.body.appendChild(main$$);

const section$$ = document.createElement("section");
section$$.classList.add("pokemons-container");
main$$.appendChild(section$$);
//section$$.style = 'display:none';

const sectionChosenPoke$$ = document.createElement("section");
sectionChosenPoke$$.classList.add("chosen-section")
main$$.appendChild(sectionChosenPoke$$);
const chosenPokemon$$ = document.createElement("article");
chosenPokemon$$.classList.add("chosen-pokemon");
sectionChosenPoke$$.appendChild(chosenPokemon$$);
// Funcion para pintar cartas-----------------------------------
//const paintingCards = (cardPokemon, namePokemon);
  //imgPokemon) => {
//}

// Creando las cartas y pintandolas------------------------------
const urlPoke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const creatingCards = () => {
  for (let index = 0; index < 20; index++) {
    //Insertando nodo article (carta Pokemon) en el documento HTML.
    let pokeArticle$$ = document.createElement("article");
    pokeArticle$$.classList.add("pokemon-card");
    section$$.appendChild(pokeArticle$$);
    //Insertando nodo parrafo en el article (carta) con el nombre del Pokemon.
    const paragraphs$$ = document.createElement('p');
    paragraphs$$.classList.add("pokemon-name");
    let objectPokemon = pokemonApi.results[index];
    paragraphs$$.textContent = objectPokemon.name;
    pokeArticle$$.appendChild(paragraphs$$);
    //Insertando nodo imagen (url.) en el article
    const imagePokemons$$ = document.createElement('img');
    imagePokemons$$.classList.add("pokemon-image");
    pokeArticle$$.appendChild(imagePokemons$$);
    const linkImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    ;
    imagePokemons$$.src = linkImage;
    console.log(imagePokemons$$.src);
  }
}
creatingCards();



