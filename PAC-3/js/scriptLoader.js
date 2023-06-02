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
    //PER TREURE ALLÒ ESCRIT DEL INPUT AMB TECLA ESC
    if (e.key === "Escape") e.target.value = "";

    document.querySelectorAll(".tarjeta").forEach((pokemon) => {
      /*  pokemon.textContent.toLowerCase().includes(e.target.value.toLowerCase()) */
      pokemon.id.includes(e.target.value.toUpperCase())
        ? pokemon.classList.remove("filtre")
        : pokemon.classList.add("filtre");
    });
  }
});

// Botó que obre el modal:
const resultatBtn = document.getElementById("cards");
// Finestra del modal:
const modal = document.getElementById("finestra-modal");
// Fa referència al element <span> que te la X, el qual tanca la finestra:
const span = document.getElementsByClassName("tancar")[0];

// Quan l'usuari fa click al botó, s'obre la finestraa
resultatBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Si l'usuari fa click a la x, la finestra es tanca
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// Si l'usuari fa click fora de la finestra, es tanca.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Div que conté el resultat de les operacions:
/* const contenidorResultats = document.querySelector(".contenidor-modal");

contenidorResultats.innerHTML = `
<div class="tarjeta">   
<img src="${url_back}" alt="" >
<br>
<p></p>
</div>`; */
