"use strict";

//? Llamada a la Api

const fetchPokeApi = async () => {
  try {
    const res = await fetch(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100,"abilities","results"/'
    );
    const pokemonApi = await res.json();
    return pokemonApi;
  } catch (error) {
    console.log(error);
  }
};
const allPokes = await fetchPokeApi();

//! FUNCIONES.

//? Funciónes de event listener para seleccionar las cartas y deseleccionarlas

const eventUnchoosingCard = (pokeArticle$$, main$$, section$$) => {
  let namePokemon = pokeArticle$$.childNodes[0].lastChild.data;
  let imagePokemon = pokeArticle$$.childNodes[1].src;
  console.log(typeof namePokemon ,namePokemon);
  const sectionChoosenPoke$$ = document.createElement("section");
  sectionChoosenPoke$$.classList.add("chosen-section");
  main$$.appendChild(sectionChoosenPoke$$);
  const chosenPokeArticle$$ = document.createElement("article");
  chosenPokeArticle$$.classList.add("chosen-pokemon");
  sectionChoosenPoke$$.appendChild(chosenPokeArticle$$);
  let CardToPaint = chosenPokeArticle$$;
  paintingCards(namePokemon, imagePokemon, CardToPaint);
  chosenPokeArticle$$.addEventListener("click", (event2) => {
  section$$.style.display = "flex";
  sectionChoosenPoke$$.remove();
  
  });
};
const eventChoosingCard = (section$$, pokeArticle$$, main$$) => {
  pokeArticle$$.addEventListener("click", (event) => {
    section$$.style.display = "none";
    eventUnchoosingCard(pokeArticle$$, main$$, section$$);
  });
};

//? Función para pintar las cartas ------------------------------

const paintingCards = (namePokemon, imagePokemon, CardToPaint) => {
  let paragraphs$$ = document.createElement("h3");
  paragraphs$$.classList.add("pokemon-name");
  paragraphs$$.textContent = namePokemon;
  CardToPaint.appendChild(paragraphs$$);
  let imagePokemon$$ = document.createElement("img");
  imagePokemon$$.classList.add("pokemon-image");
  imagePokemon$$.src = imagePokemon;
  CardToPaint.appendChild(imagePokemon$$);
};

//? Función para crear las cartas ------------------------------

const creatingCards = (section$$, main$$) => {
  for (let index = 0; index < allPokes.results.length; index++) {
    let pokeArticle$$ = document.createElement("article");
    pokeArticle$$.classList.add("pokemon-card");
    let CardToPaint = pokeArticle$$;
    section$$.appendChild(pokeArticle$$);
    let objectPokemon = allPokes.results[index];
    let namePokemon = objectPokemon.name;
    const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
    paintingCards(namePokemon, imagePokemon, CardToPaint);
    eventChoosingCard(section$$, pokeArticle$$, main$$);
  }
};

//? Funcion creación body del documento HTML ----------------------

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
  //? creacion de todas las cartas y pintado
  const section$$ = document.createElement("section");
  section$$.classList.add("pokemons-container");
  main$$.appendChild(section$$);
  creatingCards(section$$, main$$);
};

creatingExtrure();
