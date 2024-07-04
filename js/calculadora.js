function agregarAPantalla(valorEntrada) {
  document.getElementById("salida").innerHTML = valorEntrada;
}

function mostrarValores(valor) {
  var salida = document.getElementById('salida');
  salida.value = salida.value === '0' ? valor : salida.value + valor;
}

function borrar() {
  // Establece el valor del input a 0
  document.getElementById('salida').value = '0';
}

let num1 = "";
let num2 = "";
let operador = "";


function suma() {
  num1 = document.getElementById("salida").value;
  operador = "+";
  borrar();
}

function resta() {
  num1 = document.getElementById("salida").value;
  operador = "-";
  borrar();
}

function multiplicar() {
  num1 = document.getElementById("salida").value;
  operador = "*";
  borrar();
}

function division() {
  num1 = document.getElementById("salida").value;
  operador = "/";
  borrar();
}

function calcular() {
  num2 = document.getElementById("salida").value;
  let resultado = 0;
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
      if (num2 !== "0") {
        resultado = parseFloat(num1) / parseFloat(num2);
      } else {
        alert("No se puede dividir por cero");
        return;
      }
      break;
    default:
      alert("Operador no válido");
      return;
  }
  document.getElementById("salida").value = resultado.toString();
  // Resetea num1, num2 y operador para la próxima operación
  num1 = "";
  num2 = "";
  operador = "";
}
