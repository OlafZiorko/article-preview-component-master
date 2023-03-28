const sideA = document.querySelector(".side-a");
const sideB = document.querySelector(".side-b");
const shareIco = document.querySelectorAll(".share--ico");
var x = window.matchMedia("(min-width: 1000px)");
console.log(x);

shareIco.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (sideA.classList.contains("active") && x) {
      sideB.classList.toggle("active");
    } else if (sideA.classList.contains("active")) {
      sideA.classList.remove("active");
      sideB.classList.add("active");
    } else if (sideB.classList.contains("active")) {
      sideB.classList.remove("active");
      sideA.classList.add("active");
    }
  });
});
