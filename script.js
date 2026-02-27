/* =====================================================
   PROYECTO: APLICACIÓN DE CONSOLA EN JAVASCRIPT
   MÓDULO: Fundamentos de Programación
   ===================================================== */

/*
Accesibilidad:
Todos los mensajes son enviados por consola usando texto claro,
ideal para lectores de pantalla como NVDA o JAWS.
*/

// ---------- FUNCIÓN 1: OPERACIONES MATEMÁTICAS ----------
function calcular(operacion, num1, num2) {
  if (operacion === "sumar") {
    return num1 + num2;
  } else if (operacion === "restar") {
    return num1 - num2;
  } else if (operacion === "multiplicar") {
    return num1 * num2;
  } else if (operacion === "dividir") {
    if (num2 === 0) {
      return "Error: No se puede dividir por cero";
    }
    return num1 / num2;
  } else {
    return "Operación no válida";
  }
}

// ---------- FUNCIÓN 2: ARREGLOS Y FILTRO ----------
function filtrarMayores(arreglo, limite) {
  return arreglo.filter(numero => numero > limite);
}

// ---------- FUNCIÓN 3: OBJETO USUARIO ----------
function crearUsuario(nombre, edad, ciudad) {
  return {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
    descripcion: function () {
      return `${this.nombre} tiene ${this.edad} años y vive en ${this.ciudad}`;
    }
  };
}

// ---------- FUNCIÓN 4: CICLO FOR ----------
function tablaMultiplicar(numero) {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(`${numero} por ${i} es igual a ${numero * i}`);
  }
  return tabla;
}

// ---------- EJECUCIÓN DEL PROGRAMA ----------

// Operación matemática
let resultado = calcular("sumar", 10, 5);
console.log("Resultado de la suma:", resultado);

// Arreglo
let numeros = [5, 12, 25, 30, 8, 40];
console.log("Números mayores a 20:", filtrarMayores(numeros, 20));

// Objeto
let usuario = crearUsuario("Sofía", 28, "Santiago");
console.log(usuario.descripcion());

// Ciclo
console.log("Tabla de multiplicar del 7:");
tablaMultiplicar(7).forEach(linea => console.log(linea));