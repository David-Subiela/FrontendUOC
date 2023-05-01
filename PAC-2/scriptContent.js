// Botó que obre el modal:
const resultatBtn = document.querySelector(".btn");
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
const contenidorResultats = document.querySelector(".contenidor-modal");

contenidorResultats.innerHTML = `
  <h1>RESULTATS:</h1>
  <h3>1.Suma --> ${sumarNumeros(num1, num2)}</h3>
  <h3>2.Primers --> ${numerosPrimersNum1(num1)}</h3>
  <h3>2.Primers --> ${numerosPrimersNum2(num2)}</h3>
  <h3>3.Parells --> ${numerosParells(num1, num2)}</h3>
  <h3>4.num1 menor num2 --> ${num1MenorNum2(num1, num2)}</h3>
  <h3>5.num1 major num2 --> ${num1MajorNum2(num1, num2)}</h3>
  <h3>6.num1 igual num2 --> ${num1IgualNum2(num1, num2)}</h3>
  `;
