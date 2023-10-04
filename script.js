//alert("Hola este es mi Javascript");
//var Nombre="Carlos"
//console.log(Nombre)

//let contenidoTitulo="Nombre";

//let titulo=document.querySelector(".logo .fuente")

//titulo.innerHTML=contenidoTitulo;

// let promocion =" en promoción.";
// let destacados=" destacados.";

// let parrafos = document.querySelector(".fuente-oscura");

// console.log("query selector()",parrafos)

// function cambiarTexto (promocion)
// {
//     let contenido= 'Productos ${promocion}'; 
//     return contenido;
// }



// const form = document.getElementById("form");
// const nombre = document.getElementById("nombre");
// const parrafo = document.getElementById("alertas");

// function validarFormulario() {
//   let warnings = "";
//   let valido = true;
//   parrafo.innerHTML = "";

//   if (nombre.value.length < 4) {
//     warnings += `El nombre debe contener más de 4 caracteres`;
//     valido = false;
//   }

//   if (!valido) {
//     parrafo.innerHTML = warnings;
//   } else {
//     parrafo.innerHTML = "Enviado";
//   }
//   return valido;
// }

// form.addEventListener("submit", (e) => {
//   if (validarFormulario()) {
//     // Si la validación es exitosa, puedes enviar el formulario
//     formulario.submit();
//   } else {
//     e.preventDefault(); // Evita que el formulario se envíe automáticamente
//   }
// });