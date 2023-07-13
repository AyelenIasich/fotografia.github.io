//VARIABLES DINAMICAS PARA EL PRECIO DEL CURSO, AJUSTA EL PRECIO TANTO EN MOBILE COMO EN DESKTOP

// calcula cual es el monto de ahorro
const ahorro = precio_anterior - precio_nuevo;
// calcula cual es el porcentaje de ahorro
const porcentaje_descuento = Math.ceil(
  ((precio_anterior - precio_nuevo) / precio_anterior) * 100
);

const precioAnteriorDesktop = document.getElementById(
  "precio_anterior-desktop"
);
const precioAnteriorDesktop2 = document.getElementById(
  "precio_anterior-desktop2"
);
const ahorroDesktop = document.getElementById("ahorro-desktop");
const ahorroDesktop2 = document.getElementById("ahorro-desktop2");
const precioNuevoDesktop = document.getElementById("precio_nuevo-desktop");
const precioNuevoDeskto2 = document.getElementById("precio_nuevo-desktop2");
const porcentajeDescuentoDesktop = document.getElementById(
  "porcentaje-descuento-desktop"
);
const precioAnterior = document.getElementById("precio_anterior");

const ahorroMobile = document.getElementById("ahorro");
const precioNuevoMobile = document.getElementById("precio_nuevo");
const porcentajeMobile = document.getElementById("porcentaje-descuento");

const precioAnteriorMobileAlert = document.getElementById(
  "precio-anterior-alerta"
);
const precioNuevoMobileAlert = document.getElementById("precio-nuevo-alerta");

precioAnteriorDesktop.innerHTML = `${precio_anterior}`;
precioAnteriorDesktop2.innerHTML = `${precio_anterior}`;
ahorroDesktop.innerHTML = `${ahorro}`;
ahorroDesktop2.innerHTML = `${ahorro}`;
precioNuevoDesktop.innerHTML = `${precio_nuevo}`;
precioNuevoDeskto2.innerHTML = `${precio_nuevo}`;

porcentajeDescuentoDesktop.innerHTML = `${porcentaje_descuento}`;

precioAnterior.innerHTML = `${precio_anterior}`;
ahorroMobile.innerHTML = `${ahorro}`;
precioNuevoMobile.innerHTML = `${precio_nuevo}`;
porcentajeMobile.innerHTML = `${porcentaje_descuento}`;

precioAnteriorMobileAlert.innerHTML = `${precio_anterior}`;
precioNuevoMobileAlert.innerHTML = `${precio_nuevo}`;
