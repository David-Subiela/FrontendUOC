<template>
  <div v-if="show">
    <div class="overlay"></div>
    <div class="modal">
      <div class="modal-header">
        <h3 class="id-format">#{{ ('000' + selectedPokemonDetails.id).slice(-4) }}</h3>
        <h2 class="pokename-format">{{ selectedPokemonDetails.name.toUpperCase() }}</h2>
        <button @click="closeDetailsPopup">X</button>
      </div>
      <div class="modal-body">
        <img
          v-if="selectedPokemonDetails.sprites && selectedPokemonDetails.sprites.back_default"
          :src="selectedPokemonDetails.sprites.back_default"
        />
        <p class="stats-format"><strong>Alçada:</strong> {{ selectedPokemonDetails.height }} dm</p>
        <p class="stats-format"><strong>Pes:</strong> {{ selectedPokemonDetails.weight }} hg</p>
        <p class="stats-format">
          <strong>Atac:</strong>
          {{
            selectedPokemonDetails.stats.find((stat) => stat.stat.name === 'attack').base_stat ||
            '-'
          }}
        </p>
        <p class="stats-format">
          <strong>Defensa:</strong>
          {{
            selectedPokemonDetails.stats.find((stat) => stat.stat.name === 'defense').base_stat ||
            '-'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedPokemonDetails: {
      type: Object,
      default: () => ({})
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDetailsPopup() {
      this.$emit('update:show', false)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  width: 400px;
  max-width: 100%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  margin: 0;
}

.modal-header button {
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  /*   gap: 8px; */
}

.modal-body img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-top: 15px;
}

/* FORMAT ID - POPUP */
h3.id-format {
  background-color: #5f5a5a;
  color: #fff;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  font-weight: bold;
}
/* FORMAT NOM POKEMON - POPUP */
h2.pokename-format {
  font-family: 'Pokemon Solid', sans-serif;
  letter-spacing: 7px;
  margin-bottom: 5px;
}
.stats-format {
  margin: 8px;
}

/* DARK MODE - POPUP */
.dark h3.id-format {
  background-color: #e4e4e4;
  color: #5f5a5a;
}
.dark .modal {
  background-color: #ffe88a;
}
.dark h2.pokename-format {
  color: #365eaa;
}
.dark .stats-format {
  color: #690c0a;
}

/* RESPONSIVE */
@media (max-width: 428px) {
  .modal {
    width: 350px;
    max-width: 80%;
  }
}
</style>
