alert("Bienvenida persona curiosa");

let nombre = prompt("Perdon, primero los modales ¿como te llamas?");
let edadIngresada = prompt("¿Y que edad tienes?");
edadIngresada = Number(edadIngresada);

//condicional if
if (nombre === "" || nombre === null) {
  alert("NO ingresaste tu nombre, con esa actitud no pasaras.");
}else if (edadIngresada < 18 || edadIngresada === "" || edadIngresada === null || isNaN(edadIngresada)) {
  alert("Sos menor de edad, no podes pasar");
}else if (edadIngresada === 18 || edadIngresada === "" || edadIngresada === null || isNaN(edadIngresada)) {
  alert("Mmm medio justo de edad");
}else {
  alert(`Hola ${nombre} de ${edadIngresada} años`);
}

//ciclo
let tabla = parseInt(prompt("Igual para aprender no hace falta, ¿que tabla de multiplicar queres aprender?"));

for (let i = 1; i <= 10; i++) {
  let resultado = tabla * i;
  if (tabla === "" || tabla === null || isNaN(tabla)) {
    alert("Por favor, ingresa un número.")
  } else {
    alert(tabla + ` x ` + i + ` = ` + resultado);
  }
}

const contraseña = "123";
let intentoContra = prompt("Ingrese la contraseña(123)");

while (intentoContra != contraseña){
  intentoContra = prompt("Ingrese la contraseña");
}

//funcion y //objeto

function prenda(nombre, color, talle){
  this.nombre = nombre;
  this.color = color;
  this.talle = talle;
}

const prenda1 = new prenda("remera", "negro", "L");
console.log(prenda1);


//array

const stock = [];
stock.push(prenda);

console.log(stock);

//intentar aplicar una funcion con el while para la prox
//probar metodo de busqueda con inventario de kiosco 