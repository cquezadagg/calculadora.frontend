function agregarAPantalla(valorEntrada) {
  document.getElementById("salida").innerHTML = valorEntrada;
}

// function mostrarValores(numeroEntrada) {
//   let valor = document.getElementById("salida").innerHTML;
//   if (valor === "0") {
//     agregarAPantalla(numeroEntrada);
//   } else {
//     agregarAPantalla(valor + numeroEntrada);
//   }
// }
function mostrarValores(valor) {
  // Obtiene el elemento input por su ID
  var salida = document.getElementById('salida');
  // Actualiza el valor del input, agregando el valor del botón presionado
  // Si el valor actual es 0, lo reemplaza; de lo contrario, lo añade al final
  salida.value = salida.value === '0' ? valor : salida.value + valor;
}

// function borrar() {
//   agregarAPantalla("0");
// }
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
  operador = document.getElementById("btnresta").innerText;
  console.log(operador);
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

// function calcular() {
//   num2 = document.getElementById("salida").value;
//   let resultado;
//   switch (operador) {
//     case "+":
//       resultado = parseFloat(num1) + parseFloat(num2);
//       break;
//     case "-":
//       resultado = parseFloat(num1) - parseFloat(num2);
//       break;
//     case "*":
//       resultado = parseFloat(num1) * parseFloat(num2);
//       break;
//     case "/":
//       resultado = parseFloat(num1) / parseFloat(num2);
//       break;
//   }
//   agregarAPantalla(resultado);
//   num1 = "";
//   num2 = "";
//   operador = "";
// }

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