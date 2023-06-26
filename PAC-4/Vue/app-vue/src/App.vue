<template>
  <div id="app">
    <headerComp />
    <PokemonCard />
    <footerComp />
  </div>
</template>

<script>
import headerComp from './components/headerComp.vue'
import PokemonCard from './components/PokemonCard.vue'
import footerComp from './components/footerComp.vue'

export default {
  name: 'App',
  components: {
    headerComp,
    PokemonCard,
    footerComp
  }
}
</script>
