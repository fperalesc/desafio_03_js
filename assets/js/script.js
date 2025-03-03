//////////////// EJERCICIOS 2.2 + 2.3 ////////////////
function pintar(ele, color = "green") {
  ele.style.backgroundColor = color;
}

const elemento1 = document.getElementById("ele1");

elemento1.addEventListener("click", function () {
  if (elemento1.style.backgroundColor === "") {
    pintar(elemento1, "yellow");
  } else {
    pintar(elemento1, "");
  }
});
