// TEMPORIZADOR COMIENZA EN 10 MINUTOS
function iniciarTemporizador() {
  const duracion = 10;
  const duracionSegundos = duracion * 60;
  const temporizadorDiv = document.getElementById("tempo-checkout");

  function actualizarTemporizador(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    const tiempoFormateado = `${String(minutos).padStart(2, "0")}:${String(
      segundosRestantes
    ).padStart(2, "0")} minutos`;
    temporizadorDiv.textContent = tiempoFormateado;

    if (segundos <= 0) {
      temporizadorDiv.textContent = "unos minutos más...";
      temporizadorDiv.classList.remove("bolder");
    }
  }

  function iniciar() {
    let segundos = duracionSegundos;
    actualizarTemporizador(segundos);

    const intervalo = setInterval(() => {
      segundos--;
      if (segundos <= 0) {
        clearInterval(intervalo);
      }
      actualizarTemporizador(segundos);
    }, 1000);
  }

  iniciar();
}

iniciarTemporizador();

const inputs = document.querySelectorAll(".inputbox input");

function handleInputChange(event) {
  const input = event.target;
  const label = input.parentElement.querySelector("label");
  if (input.value) {
    label.classList.add("small");
  } else {
    label.classList.remove("small");
  }
}

inputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

//VARIABLES DINAMICAS PARA EL PRECIO DEL CURSO, AJUSTA EL PRECIO TANTO EN MOBILE COMO EN DESKTOP

// calcula cual es el monto de ahorro
const ahorro = precio_anterior - precio_nuevo;
// calcula cual es el porcentaje de ahorro
const porcentaje_descuento = Math.ceil(
  ((precio_anterior - precio_nuevo) / precio_anterior) * 100
);

const promocionCheckout = document.getElementById("promocion-checkout");
const precioAntesCheckout = document.getElementById("antes-checkout");
const precioAhoraCheckout = document.getElementById("ahora-checkout");
precioAntesCheckout.innerHTML = `${precio_anterior}`;
promocionCheckout.innerHTML = `${ahorro}`;
precioAhoraCheckout.innerHTML = `${precio_nuevo}`;
