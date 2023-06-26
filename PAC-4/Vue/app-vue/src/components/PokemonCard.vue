<template>
  <div>
    <img class="ash-pika" src="@/assets/5FBP.gif" alt="Ash y Pikachu" />
  </div>
  <ul id="cards" class="section-poke-cards">
    <li
      class="tarjeta"
      v-for="pokemon in pokemons.filter((el) => {
        return pokemonName == '' ? true : el.name.toLowerCase().includes(pokemonName.toLowerCase())
      })"
      :key="pokemon.id"
    >
      <span>
        <p class="id-format">#{{ ('000' + pokemon.id).slice(-4) }}</p>
        <img :src="pokemon.sprites ? pokemon.sprites.front_default : ''" />
        <h3 class="name-format">{{ pokemon.name.replaceAll('-', ' ').toUpperCase() }}</h3>
        <div class="types-container">
          <p
            v-if="pokemon.types.length >= 1"
            :class="['type', typeClasses[pokemon.types[0].type.name]]"
          >
            {{ pokemon.types[0].type.name }}
          </p>
          <p
            v-if="pokemon.types.length >= 2"
            :class="['type', typeClasses[pokemon.types[1].type.name]]"
          >
            {{ pokemon.types[1].type.name }}
          </p>
        </div>
      </span>
      <button
        class="details-button"
        @click=";(showDetailsPopup = true), (selectedPokemonDetails = pokemon)"
      >
        Veure detalls
      </button>
      <pokemon-details
        :selected-pokemon-details="selectedPokemonDetails"
        :show="showDetailsPopup"
        @update:show="showDetailsPopup = $event"
        :close="closeDetailsPopup"
      />
    </li>
  </ul>
  <div>
    <img class="chariz" src="@/assets/Charizard.gif" alt="Charizard" />
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import PokemonDetails from './pokemonDetails.vue'

export default {
  components: {
    PokemonDetails
  },
  data() {
    return {
      selectedPokemonDetails: {},
      showDetailsPopup: false
    }
  },
  methods: {
    closeDetailsPopup() {
      this.selectedPokemonDetails = {}
      this.showDetailsPopup = false
    }
  },
  setup() {
    const pokemons = reactive([])
    const selectedPokemon = reactive({})
    const pokemonName = ref('')
    const randomPokemonIds = ref([])

    const typeClasses = {
      normal: 'type-normal',
      fire: 'type-fire',
      water: 'type-water',
      electric: 'type-electric',
      grass: 'type-grass',

      ice: 'type-ice',
      fighting: 'type-fighting',
      poison: 'type-poison',
      ground: 'type-ground',
      flying: 'type-flying',
      psychic: 'type-psychic',
      bug: 'type-bug',
      rock: 'type-rock',
      ghost: 'type-ghost',

      dragon: 'type-dragon',
      dark: 'type-dark',
      steel: 'type-steel',
      fairy: 'type-fairy'
    }

    const fetchDetails = async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }

    const loadDetails = async (pokemon) => {
      const data = await fetchDetails(pokemon.url)
      Object.assign(selectedPokemonDetails, data)
      showPopup.value = true
    }

    const fetchPokemons = () => {
      const pokemonDetailsPromises = randomPokemonIds.value.map((id) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => response.json())
      })
      Promise.all(pokemonDetailsPromises).then((data) => {
        pokemons.splice(0, pokemons.length, ...data)
      })
    }

    const showPokemon = async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      Object.assign(selectedPokemon, data)
      showPopup.value = true
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

      return uniquesNumbers.map((id) => {
        return {
          id,
          name: '',
          sprites: {}
        }
      })
    }

    randomPokemonIds.value = quantityPokemons(10).map((pokemon, index) => {
      return pokemon.id
    })

    return {
      pokemons,
      selectedPokemon,
      pokemonName,
      fetchPokemons,
      showPokemon,
      closePokemon,
      getRandomArbitrary,
      quantityPokemons,
      loadDetails,
      typeClasses
    }
  },

  mounted() {
    this.fetchPokemons()
  }
}
</script>

<style scoped>
.ash-pika {
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
}

.section-poke-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
}

.tarjeta {
  width: 200px;
  height: 300px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  overflow: hidden;
}

.tarjeta:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.tarjeta span {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.tarjeta img {
  width: 180px;
  /* height: 120px; */
  object-fit: contain;
  margin-bottom: 5px;
}

.tarjeta h3 {
  margin: 0;
  text-align: center;
  font-size: 18px;
  color: #333;
  text-transform: capitalize;
}

.tarjeta p {
  margin: 0;
  text-align: center;
  font-size: 14px;
  text-transform: capitalize;
}

.type {
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  font-weight: bold;
  text-transform: capitalize;
}

/* FORMAT BOTÓ DETALLS POKEMON: */
.details-button {
  background-color: #fbbf24;
  border: 3px solid #365eaa;
  color: #333;
  padding: 8px 8px;
  margin: 8px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.details-button:hover {
  background-color: #365eaa;
  border: 3px solid #fbbf24;
  color: #fff;
}

/* FORMAT ID POKEMON: */
.id-format {
  background-color: #5f5a5a;
  color: #fff;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  font-weight: bold;
}

/* FORMAT NOM POKEMON: */
.name-format {
  padding-bottom: 5px;
}

.type-normal {
  background-color: #a8a878;
  color: #fff;
}

.type-fire {
  background-color: #f08030;
  color: #fff;
}

.type-water {
  background-color: #6890f0;
  color: #fff;
}

.type-electric {
  background-color: #f8d030;
  color: #000;
}

.type-grass {
  background-color: #78c850;
  color: #fff;
}

.type-ice {
  background-color: #98d8d8;
  color: #000;
}

.type-fighting {
  background-color: #c03028;
  color: #fff;
}

.type-poison {
  background-color: #a040a0;
  color: #fff;
}

.type-ground {
  background-color: #e0c068;
  color: #000;
}

.type-flying {
  background-color: #a890f0;
  color: #000;
}

.type-psychic {
  background-color: #f85888;
  color: #fff;
}

.type-bug {
  background-color: #a8b820;
  color: #fff;
}

.type-rock {
  background-color: #b8a038;
  color: #fff;
}

.type-ghost {
  background-color: #705898;
  color: #fff;
}
.type-dragon {
  background-color: #7038f8;
  color: #fff;
}

.type-dark {
  background-color: #705848;
  color: #fff;
}

.type-steel {
  background-color: #b8b8d0;
  color: #000;
}

.type-fairy {
  background-color: #ee99ac;
  color: #000;
}
</style>
