function cambiarEstado() {
    const boton = document.getElementById("boton");
    const texto = document.getElementById("text");
    if (texto.style.visibility === "hidden") {
        texto.style.visibility = "visible";
    } else {
        texto.style.visibility = "hidden";
    }
}
