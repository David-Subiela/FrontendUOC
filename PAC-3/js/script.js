let container;
const total_pokemons = 1010;

window.onload = inici;

function aleatori(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* FUNCIÓ CÀRREGA IMATGES */
function inici() {
  container = document.getElementById("cards");
  document.addEventListener("DOMContentLoaded", pintarVitrina);
}

/* FUNCIÓ ALEATORITZAR POKEMON (*10) AMB MIN i MAX */
function pintarVitrina(evento) {
  container.innerHTML = "";
  mostrarDades(aleatori(1, total_pokemons));
  mostrarDades(aleatori(1, total_pokemons));

  mostrarDades(aleatori(1, total_pokemons));
  mostrarDades(aleatori(1, total_pokemons));
  mostrarDades(aleatori(1, total_pokemons));
  mostrarDades(aleatori(1, total_pokemons));
  mostrarDades(aleatori(1, total_pokemons));
  mostrarDades(aleatori(1, total_pokemons));
  mostrarDades(aleatori(1, total_pokemons));
  mostrarDades(aleatori(1, total_pokemons));
}

/* FUNCIÓ VISUALITZAR DADES POKEMON */
function mostrarDades(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then(function (data) {
      let pokeName = data.name.toUpperCase();
      let url = data.sprites.other["official-artwork"].front_default;
      let url_back = data.sprites.other["official-artwork"].back_default;
      let pokeId = data.id.toString();
      if (pokeId.length === 1) {
        pokeId = "#000" + pokeId;
      } else if (pokeId.length === 2) {
        pokeId = "#00" + pokeId;
      } else if (pokeId.length === 3) {
        pokeId = "#0" + pokeId;
      } else {
        pokeId = "#" + pokeId;
      }
      let tipos = data.types.map((type) => `<p>${type.type.name}</p>`);
      tipos = tipos.join("");

      /* if (tipos === "water") {
        tipos.style.backgroundColor = "green";
      } */

      if (pokeName && url && pokeId && tipos) {
        imprimirTarjeta(pokeName, url, pokeId, tipos);
      }

      localStorage.setItem("pokeList", JSON.stringify(data));
      dataDef = JSON.parse(localStorage.getItem("pokeList"));
    });
}

function imprimirTarjeta(pokeName, url, pokeId, tipos) {
  let template = `<div class="tarjeta">    
        <img src="${url}" alt="" >
          <br>
          <h5>${pokeId}</h5>          
          <h2>
            ${pokeName}
          </h2>           
          <br>
          <p>${tipos}</p>   
  </div>`;
  container.innerHTML += template;
}

inici();
