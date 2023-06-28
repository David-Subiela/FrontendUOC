<template>
  <div id="app">
    <flechaLoader />
    <headerComp @keyword="searchWord" />
    <router-link to="/battle" class="battle-button">Batalla Pokemon</router-link>
    <router-view></router-view>
    <PokemonCard :search-poke="word" />
    <footerComp />
  </div>
</template>

<script>
import headerComp from './components/headerComp.vue'
import PokemonCard from './components/PokemonCard.vue'
import footerComp from './components/footerComp.vue'
import flechaLoader from './components/flechaLoader.vue'

export default {
  name: 'App',
  data() {
    return {
      word: ''
    }
  },
  methods: {
    searchWord(keyword) {
      this.word = keyword
    },
    iniciarBatalla() {
      this.$router.push('/battle')
    }
  },
  components: {
    headerComp,
    PokemonCard,
    footerComp,
    flechaLoader
  }
}
</script>

<style>
/* BATTLE BUTTON */
.battle-button {
  background-color: #8984a4;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.battle-button:hover {
  background-color: #c62828;
}

/* DARK MODE - BATTLE BUTTON */
.dark .battle-button {
  background-color: #c62828;
}

.dark .battle-button:hover {
  background-color: #8984a4;
}

@media (max-width: 428px) {
  .battle-button {
    font-size: 8px;
    padding: 7px 13px;
  }
}
</style>
