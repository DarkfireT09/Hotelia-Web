
function longitud() { //por declaraciÃ³n
    let palabra = document.getElementById('palabra').value
    let text = palabra.length
    alert("Su palabra tiene " + text + " letras");
}

let mayusculas = function () { //funciÃ³n anÃ³nima
    let palabra = document.getElementById('palabra').value
    let text = palabra.toUpperCase()
    alert("Su palabra en mayÃºsculas " + text + " !");
}

let minusculas = function minusculas() { //por expresiÃ³n
    let palabra = document.getElementById('palabra').value
    let text = palabra.toLowerCase()
    alert("Su palabra en minÃºsculas " + text);
}

function primercar() {
    let palabra = document.getElementById('palabra').value
    let text = palabra.substring(0, 1)
    alert("La inicial de su palabra es " + text);
}

function concatenar() {
    let palabra = document.getElementById('palabra').value
    let palabra2 = document.getElementById('palabra2').value
    let text = palabra.concat(" ", palabra2)
    alert("Las palabras unidas son " + text);
}
