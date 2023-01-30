var nombre = prompt("Ingrese su nombre");
var titulo = document.getElementById("bienvenido");

if(nombre !== null) {
    while(nombre === ""){
        nombre = prompt("Nombre no válido, intente nuevamente.");
    }

    alert("correcto");
    titulo.textContent = "Bienvenido"+nombre;

}

console.log(nombre);
console.log(titulo);