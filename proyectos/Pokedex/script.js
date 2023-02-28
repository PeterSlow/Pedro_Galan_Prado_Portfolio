const dictionaryTypes = {
  fire: "Fuego",
  water: "Agua",
  grass: "Planta",
  electric: "Electrico"
}

const pokedexAPI = "https://pokeapi.co/api/v2/pokemon/";
const typesAPI = "https://pokeapi.co/api/v2/type/";

const sectionPokedex = document.getElementById("pokedex");
const selectTypes = document.getElementById("selectTypes");

const cssTypes = ["grass", "fire", "water", "electric"];

let offsetPkm = 1;
let limitPkm = 20;
const pkmPerPage = 20;

async function getPokedex(minPokemon, maxPokemon) {
  console.log("Get PokeAPI del: " + minPokemon + " al " + maxPokemon)
  for (let id = minPokemon; id <= maxPokemon; id++) {
    getPkm(id, null);
  }
}

async function getPkm(id, url) {
  let response;
  if (id === null) {
    response = await fetch(`${url}`)
  } else {
    response = await fetch(`${pokedexAPI}${id}`)
  }
  let dataPokemon = await response.json();
  drawCard(dataPokemon);
}

async function getTypes() {
  let response = await fetch(`${typesAPI}`)
  let dataTypes = await response.json();
  fillSelectTypes(dataTypes);
}

async function getPkmByType() {
  let type = selectTypes.value;
  let response = await fetch(`${typesAPI}${type}`)
  let dataTypes = await response.json();
  sectionPokedex.innerHTML = "";
  dataTypes.pokemon.forEach(pkm => {
    getPkm(null, pkm.pokemon.url);
  });
}

const drawCard = dataPokemon => {
  let card = document.createElement("div");

  let title = document.createElement("h1");
  title.innerText = dataPokemon.name;
  card.appendChild(title);

  let image = document.createElement("img");
  let imgFuente1 = dataPokemon.sprites.other.dream_world.front_default;
  let imgFuente2 = dataPokemon.sprites.front_default;
  if (imgFuente1 === null) {
    image.setAttribute("src", imgFuente2);
  } else {
    image.setAttribute("src", imgFuente1);
  }
  card.appendChild(image);

  let firstType = dataPokemon.types[0].type.name;
  if (cssTypes.includes(firstType)) {
    card.classList.add(firstType);
  }
  card.classList.add("card");
  sectionPokedex.appendChild(card);
}


window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  //scrollTop: Píxeles que han sido desplazados del scroll
  //scrollHeight: Todo el padding y contenido visible o no en pantalla
  //clientHeight: Sólo el padding y contenido visible en pantalla
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    offsetPkm = offsetPkm + pkmPerPage;
    limitPkm = limitPkm + pkmPerPage;
    getPokedex(offsetPkm, limitPkm);
  }
});

const fillSelectTypes = dataTypes => {

  for (let type = 0; type < dataTypes.count; type++) {
    let optionElement = document.createElement("option");
    let typeName = dataTypes.results[type].name;

    optionElement.value = typeName;

    if (dictionaryTypes[typeName]) {
      optionElement.textContent = dictionaryTypes[typeName];
    } else {
      optionElement.textContent = typeName;
    }

    selectTypes.appendChild(optionElement);
  }

}

getPokedex(offsetPkm, limitPkm);
getTypes();








// TODO:

/*
- Filtrar por tipos X
- Filtrar por generación
- Ver detalles de un pkm seleccionado (girando una carta?)
- Guardar los datos en local para evitar tantas llamadas a la API
*/









/*
card.addEventListener('click', flipCard)

function flipCard(){
  let cardImg = this.getElementsByTagName('img')[0].getAttribute('src'));
  console.log(cardImg);
}
*/
