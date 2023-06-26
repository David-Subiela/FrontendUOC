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
    <div>
      <div class="moon-sun">
        <div id="dark-mode">
          <div ref="btnDark" @click="darkMode">
            <i class="fa-solid fa-moon fa-2x"></i>
          </div>
        </div>
        <div id="light-mode">
          <div ref="btnLight" @click="lightMode" style="display: none">
            <i class="fa-solid fa-sun fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'headerComp',
  setup() {
    const btnDark = ref(null)
    const btnLight = ref(null)

    const darkMode = () => {
      btnDark.value.style.display = 'none'
      btnLight.value.style.display = 'block'
      localStorage.setItem('ModoOscuro', true)
      document.documentElement.classList.add('dark')
    }

    const lightMode = () => {
      btnDark.value.style.display = 'block'
      btnLight.value.style.display = 'none'
      localStorage.setItem('ModoOscuro', false)
      document.documentElement.classList.remove('dark')
    }

    let modos = localStorage.getItem('ModoOscuro')
    modos = modos !== null ? modos === 'true' : false

    if (modos) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    onMounted(() => {
      btnDark.value = document.querySelector('#dark-mode')
      btnLight.value = document.querySelector('#light-mode')
    })

    return {
      btnDark,
      btnLight,
      darkMode,
      lightMode
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
.moon-sun {
  padding-top: 15px;
  padding-right: 15px;
}

#dark-mode,
#light-mode {
  text-align: right;
  cursor: pointer;
}

#dark-mode .fa-moon {
  color: #fff;
}
#light-mode .fa-sun {
  color: #f1c40f;
}
</style>
