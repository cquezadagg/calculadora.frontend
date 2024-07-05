const salida =
document.getElementById("salida");

function agregarAPantalla(valorEntrada) {
  salida.innerHTML = valorEntrada;
}

function mostrarValores(valor) {
  salida.value = salida.value === '0' ? valor : salida.value + valor;
}

function borrar() {
  salida.value = '0';
}

let num1 = "";
let num2 = "";
let operador = "";

function suma() {
  num1 = salida.value;
  operador = "+";
  borrar();
}

function resta() {
  num1 = salida.value;
  operador = "-";
  borrar();
}

function multiplicar() {
  num1 = salida.value;
  operador = "*";
  borrar();
}

function division() {
  num1 = salida.value;
  operador = "/";
  borrar();
}

function porcentaje() {
  num1 = salida.value;
  operador = "%";
  borrar();
}
function delNum2() {
  let salida = salida;
  salida.value = 0
}
function calcular() {
  num2 = salida.value;
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
    case "%":
      resultado = parseFloat(num1) % parseFloat(num2);
      break;
    default:
      alert("Operador no válido");
      return;
  }
  salida.value = resultado.toString();
  // Resetea num1, num2 y operador para la próxima operación
  num1 = "";
  num2 = "";
  operador = "";
}
