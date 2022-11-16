"use strict";

//import { paintingPoke } from "./painting-poke-function";

const pokemonsApi = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100,"abilities","results"/');
const pokemonApi = await pokemonsApi.json();

//! FUNCIONES.

//? Funciónes de event listener para seleccionar las cartas y deseleccionarlas

const unChoosingCard = (section$$, pokeArticle$$, chosenPokemon$$, index) => {
  let mark = false;
  let nameChosenPoke = pokeArticle$$.childNodes[0].lastChild;
  let imageChosenPoke = pokeArticle$$.childNodes[1].src;
  paintingCards(index, pokeArticle$$, mark, chosenPokemon$$, nameChosenPoke, imageChosenPoke);
  chosenPokemon$$.addEventListener("click", (event2) => {
    const paragraphToRemove$$ = chosenPokemon$$.querySelector('p');
    const imageToRemove$$ = chosenPokemon$$.querySelector('img');
    paragraphToRemove$$.remove();
    imageToRemove$$.remove();
    section$$.style.display = "flex";
    chosenPokemon$$.style.display = "none";
  });
};
const choosingCard = (section$$, pokeArticle$$, chosenPokemon$$) => {
  pokeArticle$$.addEventListener("click", (event) => {
    section$$.style.display = "none";
    chosenPokemon$$.style.display = "flex";
    unChoosingCard(section$$, pokeArticle$$, chosenPokemon$$);
  });
};

//? Función para pintar las cartas------------------------------

const paintingCards = (index, pokeArticle$$, mark, chosenPokemon$$, nameChosenPoke, imageChosenPoke) => {
  if (mark === true) {
    let paragraphs$$ = document.createElement("p");
    paragraphs$$.classList.add("pokemon-name");
    let objectPokemon = pokemonApi.results[index];
    paragraphs$$.textContent = objectPokemon.name;
    let imagePokemons$$ = document.createElement("img");
    imagePokemons$$.classList.add("pokemon-image");
    const linkImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
    imagePokemons$$.src = linkImage;
    pokeArticle$$.appendChild(paragraphs$$);
    pokeArticle$$.appendChild(imagePokemons$$);
  } else {
    let paragraphs$$ = document.createElement("p");
    paragraphs$$.classList.add("chosen-pokemon-name");
    paragraphs$$.textContent = nameChosenPoke.data;
    let imagePokemons$$ = document.createElement("img");
    imagePokemons$$.classList.add("chosen-pokemon-image");
    imagePokemons$$.src = imageChosenPoke;
    chosenPokemon$$.appendChild(paragraphs$$);
    chosenPokemon$$.appendChild(imagePokemons$$);
  }
};

//? Función para crear las cartas------------------------------

const creatingCards = (section$$, main$$) => {
  const sectionChosenPoke$$ = document.createElement("section");
  sectionChosenPoke$$.classList.add("chosen-section");
  main$$.appendChild(sectionChosenPoke$$);
  const chosenPokemon$$ = document.createElement("article");
  chosenPokemon$$.classList.add("chosen-pokemon");
  sectionChosenPoke$$.appendChild(chosenPokemon$$);
  for (let index = 0; index < pokemonApi.results.length; index++) {
    let mark = true;
    const pokeArticle$$ = document.createElement("article");
    pokeArticle$$.classList.add("pokemon-card");
    section$$.appendChild(pokeArticle$$);
    paintingCards(index, pokeArticle$$, mark, chosenPokemon$$);
    choosingCard(section$$, pokeArticle$$, chosenPokemon$$);
  }
};

//? Funcion creación body del documento HTML----------------------

const creatingExtrure = () => {
  const header$$ = document.createElement("header");
  header$$.classList.add("header");
  document.body.appendChild(header$$);
  const divBackground$$ = document.createElement("div");
  divBackground$$.classList.add("background-header");
  header$$.appendChild(divBackground$$);
  const logoPokemon$$ = document.createElement("img");
  logoPokemon$$.classList.add("pokemon-logo");
  logoPokemon$$.src = "./Images/Pokemon-logo.png";
  header$$.appendChild(logoPokemon$$);
  //? main del documento
  const main$$ = document.createElement("main");
  document.body.appendChild(main$$);
  //? cracion de todas las cartas y pintado
  const section$$ = document.createElement("section");
  section$$.classList.add("pokemons-container");
  main$$.appendChild(section$$);
  creatingCards(section$$, main$$);
};

creatingExtrure();
