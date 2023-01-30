var nombre = prompt("Cuál es tu nombre?");
document.getElementById(bienvenido)

if (nombre == null || nombre == "") {
    txt = "No ingresaste un nombre";
} else {
    document.write(nombre);
}

alert (txt);