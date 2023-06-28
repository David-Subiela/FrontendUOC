<template>
  <div>
    <div class="wrapper loader" :class="{ loader2: isLoading }">
      <p class="charge">Cargando Pokemon...</p>
      <div class="pokeball"></div>
    </div>
    <div class="flecha-arriba" v-if="showScrollToTopButton" @click="scrollToTop">
      <img src="@/assets/flecha.png" alt="flecha" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'loaderComp',
  data() {
    return {
      isLoading: true,
      showScrollToTopButton: false
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.isLoading = false
    })

    window.addEventListener('scroll', () => {
      this.showScrollToTopButton = window.scrollY > 0
    })
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pokeball {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: frames 0.8s linear 0s infinite;
}

.pokeball:after {
  content: '';
  position: absolute;
  width: 60px;
  height: 30px;
  background-color: red;
  border-bottom: 4px solid;
  top: -4px;
}

.pokeball:before {
  content: '';
  position: absolute;
  background-color: #fff;
  width: 10px;
  height: 10px;
  border: 4px solid;
  border-radius: 50%;
  bottom: 18px;
  right: 18px;
  z-index: 1;
}

/* AnimationFrames */
@keyframes frames {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* BACKGROUND LOADER*/
.loader {
  background: #192935;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  clip-path: circle(0% at 100% 0);
  transition: clip-path 3s ease-in-out;
}

.loader2 {
  clip-path: circle(150% at 100% 0);
}

.charge {
  color: aliceblue;
  font-size: 35px;
}

/* FLECHA ARRIBA */

.flecha-arriba {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #792120;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  box-shadow: 0 0 10px #fff, 0 0 0 3px #0003;
}

.flecha-arriba img {
  max-width: 70%;
  max-height: 100%;
}

.flecha-arriba:hover {
  opacity: 1;
}

.dark .flecha-arriba {
  background-color: #d35b59;
}
@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
  }

  25% {
    transform: rotate(90deg) scale(0.8);
  }

  50% {
    transform: rotate(180deg) scale(1);
  }

  75% {
    transform: rotate(270deg) scale(0.8);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
