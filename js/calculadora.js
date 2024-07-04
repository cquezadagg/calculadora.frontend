document.addEventListener('DOMContentLoaded', () => {
  let visor = document.getElementById("salida");

  document.querySelectorAll('button.val-print').forEach(button => {
    button.addEventListener('click', () => {
      let valorBtn = button.getAttribute('value')
      visor.innerHTML += valorBtn + '';
    })
  })
})
let num1 = document.getElementById("primerNumero");
let num2 = document.getElementById("segundoNumero");

function mostrarValores() {
}
function suma() {
  let resSum = parseInt(num1) + parseInt(num2);
  document.getElementById("result").value = resSum;
}

function resta() {
  document.getElementById("result").value = parseInt(num1) - parseInt(num2);
}

function multiplicar() {
  document.getElementById("result").value = parseInt(num1) * parseInt(num2);
}

function division() {
  document.getElementById("result").value = parseInt(num1) / parseInt(num2);
}
