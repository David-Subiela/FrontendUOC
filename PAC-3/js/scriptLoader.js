/* CREACIÓ LOADER AL CARREGAR LA PÁGINA (AMB EFECTE): */
window.addEventListener("load", function () {
  document.getElementById("loader").classList.toggle("loader2");
});

const flechaArriba = document.querySelector(".flecha-arriba");

/* QUAN FAS CLICK flechaArriba, TORNES AL INICI */
flechaArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* NO APAREIX EL BOTÓ FLETXA, QUAN ESTÁS AL INICIO */
window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    flechaArriba.style.display = "none";
  } else {
    flechaArriba.style.display = "block";
  }
  flechaArriba.hidden = this.scrollY < document.documentElement.clientHeight;
});

// BUSCADOR POKEMONS:
document.addEventListener("keyup", (e) => {
  if (e.target.matches("#autocomplete-input")) {
    if (e.key === "Escape") e.target.value = "";

    document.querySelectorAll(".tarjeta").forEach((pokemon) => {
      pokemon.id.includes(e.target.value.toUpperCase())
        ? pokemon.classList.remove("filtre")
        : pokemon.classList.add("filtre");
    });
  }
});
