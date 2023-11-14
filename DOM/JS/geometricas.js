function areaCirculo (){
    var radio = document.getElementById("radioCirc").value;
    var area = Math.PI * Math.pow(radio,2);    
    document.getElementById("areaCirc").value = area;
    alert("El área del círculo es: " + area);
}

function perimetroCirculo (){
    var radio = document.getElementById("radioCirc").value;
    var perimetro = 2 * Math.PI * radio;
    document.getElementById("perimetro").value = perimetro;
    alert("El perímetro del círculo es: " + perimetro);
}

/*
function areaCuadrado (){
    var lado = document.getElementById("lado").value;
    var area = Math.pow(lado,2);
    document.getElementById("ladoCuad").value = lado;
    document.getElementById("areaCuad").value = area;
}

function perimetroCuadrado (){
    var lado = document.getElementById("lado").value;
    var perimetro = lado * 4;
    document.getElementById("perimetro").value = perimetro;
}

function areaTriangulo (){
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = (base * altura)/2;
    document.getElementById("area").value = area;
}

function perimetroTriangulo (){
    var lado1 = document.getElementById("lado1").value;
    var lado2 = document.getElementById("lado2").value;
    var lado3 = document.getElementById("lado3").value;
    var perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(lado3);
    document.getElementById("perimetro").value = perimetro;
}
*/