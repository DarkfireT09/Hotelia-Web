function validateDocument(document){
    if (document === '') {
        alert('Debe ingresar un correo');
        return false;
      }   
}

function validateName(name){
    if (name === '') {
        alert('Debe ingresar un nombre');
        return false;
      }
}

function validateLastname(lastName){
    if (lastName === '') {
        alert('Debe ingresar sus apellidos');
        return false;
      }
}

function validateBirth(birth){
    
}

function validateEmail(email){
    if (email === '') {
        alert('Debe ingresar un correo');
        return false;
      }   
}

function validatePassword(password){
    if (password === '') {
        alert('Debe ingresar una contraseña');
        return false;
      }   
}

function validateForm() {
    // Obtener los valores de los campos
    const tipo = document.querySelector('#tipoDocumento').value;
    const documento = document.querySelector('#documento').value;
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const nacimiento = document.querySelector('#nacimiento').value;
    const correo = document.querySelector('#correo').value;
    const contraseña = document.querySelector('#contraseña').value;
    const valContraseña = document.querySelector('#valContraseña').value;
}