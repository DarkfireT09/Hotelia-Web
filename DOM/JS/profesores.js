function validateTeacher() {
    console.log("xz")
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var materia = document.getElementById("materia").value;

    if (nombre == "Tatiana" && apellido == "Cabrera" && materia == "Desarrollo web"){
        alert("Información correcta")
    }else if(nombre == "Daniel" && apellido == "Bojaca" && materia == "Grafos"){
        alert("Información correcta")
    }else if(nombre == "Edgar" && apellido == "Andrade" && materia == "Teoria de la Computacion"){
        alert("Información correcta")
    }else if(nombre == "Pedro" && apellido == "Wightman" && materia == "Capstone"){
        alert("Información correcta")
    }else if(nombre == "Andres" && apellido == "Barrera" && materia == "Software"){
        alert("Información correcta")   
    }else if(nombre == "Norma" && apellido == "Sarmiento" && materia == "Calculo 2"){
        alert("Información correcta")
    }else{
        alert("Información incorrecta")
    }
}