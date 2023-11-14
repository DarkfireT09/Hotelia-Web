function clasificarTriangulo() {
  const ladoA = parseFloat(document.getElementById("ladoA").value);
  const ladoB = parseFloat(document.getElementById("ladoB").value);
  const ladoC = parseFloat(document.getElementById("ladoC").value);

  if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert("Ingresa valores numéricos para los lados del triángulo.");
  } else if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    alert("Los lados del triángulo deben ser mayores que cero.");
  } else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
    alert("Los lados no forman un triángulo válido.");
  } else if (ladoA === ladoB && ladoB === ladoC) {
    alert("El triángulo es equilátero.");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    alert("El triángulo es isósceles.");
  } else {
    alert("El triángulo es escaleno.");
  }
}
