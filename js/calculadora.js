function agregarAPantalla(valorEntrada) {
  document.getElementById("salida").innerHTML = valorEntrada;
}

function mostrarValores(numeroEntrada) {
  let valor = document.getElementById("salida").innerHTML;
  if (valor === "0") {
    agregarAPantalla(numeroEntrada);
  } else {
    agregarAPantalla(valor + numeroEntrada);
  }
}

function borrar() {
  agregarAPantalla("0");
}

let num1 = "";
let num2 = "";
let operador = "";

function suma() {
  num1 = document.getElementById("salida").innerHTML;
  operador = "+";
  borrar();
}

function resta() {
  num1 = document.getElementById("salida").innerHTML;
  operador = "-";
  borrar();
}

function multiplicar() {
  num1 = document.getElementById("salida").innerHTML;
  operador = "*";
  borrar();
}

function division() {
  num1 = document.getElementById("salida").innerHTML;
  operador = "/";
  borrar();
}

function calcular() {
  num2 = document.getElementById("salida").innerHTML;
  let resultado;
  switch (operador) {
    case "+":
      resultado = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      resultado = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      resultado = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      resultado = parseFloat(num1) / parseFloat(num2);
      break;
  }
  agregarAPantalla(resultado);
  num1 = "";
  num2 = "";
  operador = "";
}
