var nombre = prompt("Ingrese su nombre");
var titulo = document.getElementById("bienvenido");

if(nombre !== null) {
    while(nombre === ""){
        nombre = prompt("Nombre no válido, intente nuevamente.");
    }

    alert("correcto");

}

console.log(nombre);
console.log(document.getElementById("bienvenido"));