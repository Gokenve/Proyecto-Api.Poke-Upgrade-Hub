"use strict";

//import {pokemonsApi, pokemonApi} from './fetch-poke-api';
//import { paintingPoke } from "./painting-poke-function";

const pokemonsApi = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100,"abilities","results"/');
const pokemonApi = await pokemonsApi.json();

//! FUNCIONES.

//? Funciónes de event listener para seleccionar las cartas y deseleccionarlas
const choosingCard = (section$$, chosenPokemon$$) => {
  //const choseenCard$$ = document.querySelector('.chosen-pokemon');
  console.log(section$$,chosenPokemon$$);
  debugger
  section$$.addEventListener("click", (event) => {
    console.log (event.target, event.target.tagName);
    debugger
    if (event.target && event.target.tagName === "ARTICLE") {
      section$$.style.display = "none";
      chosenPokemon$$.style.display = "flex";
      //paintingCards(index, chosenPokemon$$, (mark = false));
      //unChoosingCard(index, chosenPokemon$$, section$$);
      //paintingPoke(chosenPokemon$$);
      unChoosingCard(section$$, chosenPokemon$$);
    }
  });
}
const unChoosingCard = (section$$, chosenPokemon$$) => {
  section$$.removeEventListener();
  chosenPokemon$$.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "ARTICLE") {
    section$$.style.display = "flex";
    chosenPokemon$$.style.display = "none";
    //paintingCards(index, chosenPokemon$$, (mark = true));
    choosingCard(section$$, chosenPokemon$$);
    }
  });
}

//? Función para pintar las cartas------------------------------
const paintingCards = (index, pokeArticle$$, chosenPokemon$$, mark) => {
  const paragraphs$$ = document.createElement("p");
  paragraphs$$.classList.add("pokemon-name");
  let objectPokemon = pokemonApi.results[index];
  paragraphs$$.textContent = objectPokemon.name;
  const imagePokemons$$ = document.createElement("img");
  imagePokemons$$.classList.add("pokemon-image");
  const linkImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
  imagePokemons$$.src = linkImage;
  if (mark === true) {
    pokeArticle$$.appendChild(paragraphs$$);
    pokeArticle$$.appendChild(imagePokemons$$);
  } else {
    chosenPokemon$$.appendChild(paragraphs$$);
    chosenPokemon$$.appendChild(imagePokemons$$);
  }
}

//? Función para crear las cartas------------------------------
const creatingCards = (section$$, main$$) => {
  for (let index = 0; index < pokemonApi.results.length; index++) {
    let mark = true;
    const pokeArticle$$ = document.createElement("article");
    pokeArticle$$.classList.add("pokemon-card");
    section$$.appendChild(pokeArticle$$);
    paintingCards(index, mark, pokeArticle$$);
  }
  const sectionChosenPoke$$ = document.createElement("section");
  sectionChosenPoke$$.classList.add("chosen-section");
  main$$.appendChild(sectionChosenPoke$$);
  const chosenPokemon$$ = document.createElement("article");
  chosenPokemon$$.classList.add("chosen-pokemon");
  sectionChosenPoke$$.appendChild(chosenPokemon$$);
  choosingCard(section$$, chosenPokemon$$);
  }




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
  //debugger
  //console.log(section$$);
  //creatingChosenCard(main$$);
}
creatingExtrure();

