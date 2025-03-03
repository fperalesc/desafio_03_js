//////////////// EJERCICIO 3 ////////////////

//////////////// EJERCICIO 3.2 ////////////////
const caja1 = document.getElementById("div1");
const caja2 = document.getElementById("div2");
const caja3 = document.getElementById("div3");
const caja4 = document.getElementById("div4");

let colorCaja = "black";

const cambioColores = function (numeroCaja, colorOriginal) {
  if (numeroCaja.style.backgroundColor != colorCaja) {
    numeroCaja.style.backgroundColor = colorCaja;
  } else {
    numeroCaja.style.backgroundColor = colorOriginal;
  }
};

caja1.addEventListener("click", function () {
  cambioColores(caja1, "blue");
});

caja2.addEventListener("click", function () {
  cambioColores(caja2, "red");
});

caja3.addEventListener("click", function () {
  cambioColores(caja3, "green");
});

caja4.addEventListener("click", function () {
  cambioColores(caja4, "yellow");
});

//////////////// EJERCICIO 3.3 ////////////////

let a = "rgb(255, 0, 247)";
let s = "rgb(255, 115, 0)";
let d = "rgb(0, 191, 255)";

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    key.style.backgroundColor = a;
  } else if (event.key === "s" || event.key === "S") {
    key.style.backgroundColor = s;
  } else if (event.key === "d" || event.key === "D") {
    key.style.backgroundColor = d;
  }
});

//////////////// EJERCICIO 3.4 ////////////////

const contenedorNuevasCajas = document.getElementById("contenedorNuevasCajas");

document.addEventListener("keydown", function (event) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.border = "2px solid black";
  nuevoDiv.style.margin = "10px";
  nuevoDiv.style.display = "inline-block";
  if (event.key === "q" || event.key === "Q") {
    nuevoDiv.style.backgroundColor = "rgb(135, 0, 193)";
    contenedorNuevasCajas.appendChild(nuevoDiv);
  } else if (event.key === "w" || event.key === "W") {
    nuevoDiv.style.backgroundColor = "rgb(124, 124, 124)";
    contenedorNuevasCajas.appendChild(nuevoDiv);
  } else if (event.key === "e" || event.key === "E") {
    nuevoDiv.style.backgroundColor = "rgb(83, 47, 5)";
    contenedorNuevasCajas.appendChild(nuevoDiv);
  }
});
