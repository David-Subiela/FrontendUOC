<template>
  <nav class="logo">
    <img class="logo-pokemon" src="@/assets/logo-pokemon.png" alt="logo Pokemon" />
    <div class="box">
      <input
        v-model="pokemonName"
        type="search"
        placeholder="Busca aquí tu Pokémon"
        class="src"
        id="autocomplete-input"
        autocomplete="off"
      />
      <button class="btn">
        <img src="@/assets/btn_pokeball.png" alt="pokeball" />
      </button>
    </div>
  </nav>
  <article>
    <div>
      <!-- <img class="ash-pika" src="@/assets/5FBP.gif" alt="Ash y Pikachu" /> -->
    </div>
    <section>
      <!-- <section id="cards" class="section-poke-cards"> -->
      <!-- <span></span>
      <span class="tipos"></span> -->
      <ul id="cards" class="section-poke-cards">
        <li
          class="tarjeta"
          v-for="pokemon in pokemons.filter((el) => {
            return pokemonName == '' ? true : el.name.indexOf(pokemonName) >= 0 ? true : false
          })"
          :key="pokemon.name"
        >
          <span @click="showPokemon(pokemon.url)">
            {{ pokemon.name.replaceAll('-', ' ').toUpperCase() }}
            <img :src="selectedPokemon.sprites ? selectedPokemon.sprites.front_default : ''" />
          </span>
        </li>
      </ul>
      <!-- POPUP CON DETALLES DEL POKEMON -->
      <div id="popup" class="modal">
        <div class="modal-content">
          <span class="close" @click="closePokemon">&times;</span>
          <div class="row">
            <div class="column">
              <img :src="selectedPokemon.sprites ? selectedPokemon.sprites.back_default : ''" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div id="cards" class="poke-cards"></div> -->
      <!-- <div class="poke-cards"></div>  -->
    </section>
    <div>
      <!-- <img class="chariz" src="@/assets/Charizard.gif" alt="Charizard" /> -->
    </div>
  </article>
  <footer class="social">
    <a href="mailto:davsubiela@gmail.com" target="_blank" rel="noopener no-referrer"
      ><i class="fa-solid fa-envelope"></i
    ></a>
    <a href="https://linkedin.com/in/davidsubi" target="_blank" rel="noopener no-referrer"
      ><i class="fa-brands fa-linkedin-in"></i
    ></a>
    <a href="https://github.com/David-Subiela" target="_blank" rel="noopener no-referrer"
      ><i class="fa-brands fa-github"></i
    ></a>
  </footer>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const pokemons = reactive([])
    const selectedPokemon = reactive({})
    const pokemonName = ref('')
    const fetchPokemons = () => {
      fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => response.json())
        .then((data) => Object.assign(pokemons, data.results))
    }
    const showPokemon = (url) => {
      async function showPokemon(url) {
        const response = await fetch(url)
        const data = await response.json()
        Object.assign(selectedPokemon, data)
        showPopup.value = true
      }
    }
    const closePokemon = () => {
      var popup = document.getElementById('popup')
      popup.style.display = 'none'
    }
    const getRandomArbitrary = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
    }
    const quantityPokemons = (quantity) => {
      const maxPokemons = 1010
      const minPokemons = 1
      const uniquesNumbers = []

      while (uniquesNumbers.length < quantity) {
        let number = getRandomArbitrary(minPokemons, maxPokemons)

        if (uniquesNumbers.indexOf(number) === -1) {
          uniquesNumbers.push(number)
        }
      }
      return uniquesNumbers
    }

    return {
      pokemons,
      selectedPokemon,
      pokemonName,
      fetchPokemons,
      showPokemon,
      closePokemon,
      getRandomArbitrary,
      quantityPokemons
    }
  },

  mounted() {
    this.fetchPokemons()
    this.quantityPokemons(10)
  }
}
</script>

<style scoped>
.logo {
  background-color: #d62e2c;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
}
.logo-pokemon {
  width: 200px;
}

/* SEARCH BUTTON */
.box {
  display: flex;
  align-items: center;
  top: 30px;
  right: 550px;
  width: 220px;
}
input.src {
  height: 30px;
  text-align: left;
  font-size: 14px;
  border-radius: 25px;
  color: #1f1c1c;
  background: #fff url('/assets/search-icon.png') no-repeat 9px center;
  transition: all 0.5s;
}

textarea:focus,
input:focus,
input[type]:focus {
  box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px #fff;
  outline: 0 none;
}
#autocomplete-input {
  padding-left: 35px;
}
button {
  background: transparent;
  border: none;
}

.btn img {
  width: 35px;
  height: 35px;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
}

.btn img:hover {
  transform: rotate(360deg);
  transition: 2s ease-in-out;
}

/* .ash-pika {
  position: relative;
  display: block;
  width: 150px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid #37aa54;
}
.chariz {
  display: block;
  width: 200px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
} */

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 3% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 35%;
}
/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

/* /FORMAT TARGETA POKEMON: */
.section-poke-cards {
  display: flex;
  justify-content: space-around;
  margin: 100px;
  flex-wrap: wrap;
}

.tarjeta {
  padding: 10px;
  border-radius: 25px;
  border: 1px solid gray;
  text-align: center;
  cursor: pointer;
  width: 20%;
  background-color: #f2f2f2;
  list-style: none;
}
.tarjeta:hover {
  background-color: #f2f2f2;
}

.tarjeta-list {
  display: flex;
}
.tarjeta img {
  width: 175px;
}
.tarjeta h5 {
  font-size: 15px;
  text-align: left;
  color: #5f5a5a;
  padding-bottom: 5px;
  padding-left: 10px;
}
.tarjeta h2 {
  font-size: 25px;
  font-weight: 700;
}
.tarjeta p {
  display: inline-block;
  font-size: 13px;
  width: 25%;
  border: 1px solid #d62e2c;
  border-radius: 25px;
  align-items: center;
}
/* .filtre {
  display: none;
} */

/* FOOTER - XARXES SOCIALS */
.social {
  background-color: #463f3f;
  text-align: center;
  padding: 20px;
}

.social i {
  color: azure;
  font-size: 30px;
  padding-left: 50px;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
