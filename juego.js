let palabras = ["MESA","AUTO","ALURA","ROMA","RATON","CALABAZA"]

function sortea(n) {
    return Math.round(Math.random() * n);
}

function palabraAleatoria () {
    return palabras[sortea(palabras.length-1)];
}

/* alert(palabraAleatoria()); */