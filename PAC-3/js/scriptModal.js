// MODAL:

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
