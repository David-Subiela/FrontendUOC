const flechaArriba = document.querySelector(".flecha-arriba");
const esconderMenu = document.querySelector(".nav-icon-button");

flechaArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    flechaArriba.style.display = "none";
  } else {
    flechaArriba.style.display = "block";
  }
  flechaArriba.hidden = this.scrollY < document.documentElement.clientHeight;
});

window.addEventListener("scroll", function () {
  if (window.scrollY == 0) {
    esconderMenu.style.display = "block";
  } else {
    esconderMenu.style.display = "none";
  }
  newsLetter.hidden = this.scrollY < document.documentElement.clientHeight;
});
