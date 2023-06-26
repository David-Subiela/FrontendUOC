const totalPokemons = 1010;
const shownPokemonIds = new Set();

function aleatori(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function inici() {
  const container = document.getElementById("cards");
  pintarVitrina(container);
}

function pintarVitrina(container) {
  container.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    let id = aleatori(1, totalPokemons);
    while (shownPokemonIds.has(id)) {
      id = aleatori(1, totalPokemons);
    }
    shownPokemonIds.add(id);
    mostrarDades(id, container);
  }
}

function mostrarDades(id, container) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then(function (data) {
      const pokeName = data.name.toUpperCase();
      const url = data.sprites.other["official-artwork"].front_default;
      const pokeId = data["id"].toString().padStart(4, "0");
      const tipos = data.types
        .map((type) => `<p>${type.type.name}</p>`)
        .join("");

      if (container) {
        imprimirTarjeta(pokeName, url, pokeId, tipos, container, id);
      }

      /* localStorage.setItem("pokeList", JSON.stringify(data));
      dataDef = JSON.parse(localStorage.getItem("pokeList")); */
    });
}

function imprimirTarjeta(pokeName, url, id, tipos, container) {
  // Definir el ID del Pokémon como una cadena de cuatro dígitos que representa su número en la Pokédex
  const pokeId = ("000" + id).slice(-4);

  console.log(`Imprimiendo tarjeta para el Pokémon con ID ${pokeId}.`);

  const template = `
      <div class="tarjeta" id="${pokeId}">    
        <img src="${url}" alt="">
        <br>
        <h5>${pokeId}</h5>          
        <h2>${pokeName}</h2>           
        <br>
        <p>${tipos}</p>   
      </div>
    `;
  container.innerHTML += template;

  // Agregar el evento click a la tarjeta
  const tarjeta = document.getElementById(pokeId);
  if (tarjeta) {
    tarjeta.addEventListener("click", function () {
      console.log(
        `Haciendo clic en la tarjeta para el Pokémon con ID ${pokeId}.`
      );
      // Mostrar la ventana modal
      const modal = document.getElementById("finestra-modal");
      modal.style.display = "block";

      // Obtener la información del Pokémon correspondiente
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        .then((response) => response.json())
        .then((data) => {
          // Obtener la URL de la imagen trasera del Pokémon
          const backUrl = data.sprites.back_default;
          // Actualizar el contenido de la ventana modal con la imagen del Pokémon y sus stats
          const pokeImg = document.getElementById("pokemon-imatge");
          pokeImg.src = backUrl ? backUrl : url;
        });
    });
  }
}

// Funció que mostra la finestra modal amb la informació del Pokémon
/* function mostrarVentanaModal(pokeId, url) {
  // Obtener la información del Pokémon correspondiente
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((response) => response.json())
    .then((data) => {
      // Actualizar el contenido de la ventana modal con la imagen del Pokémon y sus stats
      const pokeImg = document.getElementById("pokemon-imatge");
      pokeImg.src = url;
      // Mostrar la ventana modal
      const modal = document.getElementById("finestra-modal");
      modal.style.display = "block";
    });
} */

inici();
