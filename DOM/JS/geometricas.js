function areaCirculo (){
    var radioCirc = parseFloat(document.getElementById("radioC").value);
    var areaCirc = Math.PI * radioCirc * radioCirc;    
    alert(`El área del círculo con radio ${radioCirc} es: ${areaCirc}`);//pendiente hacer que lo imprima en el html
}

function perimetroCirculo (){
    var radioCirc = parseFloat(document.getElementById("radioC").value);
    var perimetroCirc = 2 * Math.PI * radioCirc;    
    alert(`El perímetro del círculo con radio ${radioCirc} es: ${perimetroCirc}`);//pendiente hacer que lo imprima en el html
}


function areaCuadrado (){
    var lado = parseFloat(document.getElementById("ladocuad").value);
    var area = Math.pow(lado,2);
    alert(`El área del cuadrado con lado ${lado} es: ${area}`);//pendiente hacer que lo imprima en el html
}

function perimetroCuadrado (){
    var lado = parseFloat(document.getElementById("ladocuad").value);
    var perimetro = lado * 4;
    alert(`El perímetro del cuadrado con lado ${lado} es: ${perimetro}`);//pendiente hacer que lo imprima en el html
}

function areaRectangulo (){
    var base = parseFloat(document.getElementById("baseR").value);
    var altura = parseFloat(document.getElementById("alturaR").value);
    var area = base * altura;
    alert(`El área del rectángulo con base ${base} y altura ${altura} es: ${area}`);//pendiente hacer que lo imprima en el html
}

function perimetroRectangulo (){
    var base = parseFloat(document.getElementById("baseR").value);
    var altura = parseFloat(document.getElementById("alturaR").value);
    var perimetro = 2 * (base + altura);
    alert(`El perímetro del rectángulo con base ${base} y altura ${altura} es: ${perimetro}`);//pendiente hacer que lo imprima en el html
}

function areaTriangulo (){
    var base = parseFloat(document.getElementById("baseT").value);
    var altura = parseFloat(document.getElementById("alturaT").value);
    var area = (base * altura)/2;
    alert(`El área del triángulo con base ${base} y altura ${altura} es: ${area}`);//pendiente hacer que lo imprima en el html
}

function perimetroTriangulo (){
    var lado1 = document.getElementById("lado1").value;
    var lado2 = document.getElementById("lado2").value;
    var lado3 = document.getElementById("lado3").value;
    var perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(lado3);
    alert(`El perímetro del triángulo con lados ${lado1}, ${lado2} y ${lado3} es: ${perimetro}`);//pendiente hacer que lo imprima en el html
}


