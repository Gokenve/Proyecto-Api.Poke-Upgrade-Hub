"use strict";
// Trayendo response de Pokemons de la api---------------
//const allPokemons = [];
//for (let id = 1; id <= 66; id++) {
  const pokemonsApi = await fetch('https://pokeapi.co/api/v2/pokemon');
  const pokemonApi = await pokemonsApi.json();
  //debugger
  //allPokemons.push(pokemonApi);
//}
// Creación de nodos primarios y sus clases en el documento de HTML-----------
const header$$ = document.createElement("header");
document.body.appendChild(header$$);
const divBackground$$ = document.createElement('div');
divBackground$$.classList.add("background-header");
header$$.appendChild(divBackground$$)

/*const backgroundHeader$$ = document.createElement('img');
backgroundHeader$$.scr = 'https://thumbs.dreamstime.com/z/pokemon-carda-el-fondo-74262268.jpg';
divBackground$$.appendChild(backgroundHeader$$);*/


const logoPokemon$$ = document.createElement('img');
logoPokemon$$.classList.add("pokemon-logo");
logoPokemon$$.src = './Images/Pokemon.png';
header$$.appendChild(logoPokemon$$);


const main$$ = document.createElement("main");
const section$$ = document.createElement("section");
const urlPoke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
header$$.classList.add("header");
section$$.classList.add("pokemons-container");

document.body.appendChild(main$$);
main$$.appendChild(section$$);
// Funcion para pintar cartas-----------------------------------

//const paintingCards = (cardPokemon, namePokemon);
  //imgPokemon) => {
  //debugger

  //debugger 
//}
// Creando las cartas y pintandolas------------------------------
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
    debugger
    
    //paintingCards(pokeArticle$$, imagePokemons$$);

    //cardPokemon.appendChild(imagePokemons$$);

    //debugger
  }
}
creatingCards();



