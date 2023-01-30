var nombre = prompt("Hola! Ingrese su nombre para continuar.");
var titulo = document.getElementById("bienvenido");

if(nombre !== null) {
    while(nombre === ""){
        nombre = prompt("El nombre no es válido, intentelo nuevamente.");
    }
    
    titulo.textContent = "Bienvenido    " + nombre + "  !";
}

console.log(nombre);
console.log(titulo);