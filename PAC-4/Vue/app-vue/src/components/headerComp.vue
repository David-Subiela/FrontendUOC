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
        @input="searchKeyword"
      />
      <button class="btn">
        <img src="@/assets/btn_pokeball.png" alt="pokeball" />
      </button>
    </div>
    <div>
      <div class="moon-sun">
        <div @click="toggleDarkMode">
          <i class="fa-solid fa-moon" v-if="!isDarkMode"></i>
          <i class="fa-solid fa-sun" v-else></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'headerComp',
  emits: ['keyword'],
  data() {
    return {
      pokemonName: null
    }
  },
  methods: {
    searchKeyword() {
      this.$emit('keyword', this.pokemonName)
    }
  },

  setup() {
    const pokemonName = ref('')
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
      if (isDarkMode.value) {
        localStorage.setItem('ModoOscuro', true)
        document.documentElement.classList.add('dark')
      } else {
        localStorage.setItem('ModoOscuro', false)
        document.documentElement.classList.remove('dark')
      }
    }

    let modos = localStorage.getItem('ModoOscuro')
    modos = modos !== null ? modos === 'true' : false
    isDarkMode.value = modos

    onMounted(() => {
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })

    return {
      pokemonName,
      isDarkMode,
      toggleDarkMode
    }
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
  background: #fff url('@/assets/search-icon.png') no-repeat 9px center;
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

/* Estilos para los botones de modo oscuro */
.fa-solid,
.fas {
  font-size: 25px;
}
.moon-sun {
  padding-top: 15px;
  /* padding-right: 15px; */
  cursor: pointer;
}

.moon-sun .fa-moon {
  color: #fff;
}
.moon-sun .fa-sun {
  color: #f1c40f;
}

.dark .logo {
  background-color: #690c0a;
  color: #fff;
}

/* RESPONSIVE */
@media (max-width: 428px) {
  .logo-pokemon {
    width: 100px;
  }
  input.src {
    height: 20px;
    font-size: 10px;
    width: 154px;
    margin-left: 25px;
  }
  .btn img {
    width: 22px;
    height: 22px;
  }
  .fa-solid,
  .fas {
    font-size: 17px;
  }
  .moon-sun {
    padding-top: 7px;
  }
}
</style>
