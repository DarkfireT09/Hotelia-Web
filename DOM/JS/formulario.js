const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	documento: /^[0-9]{5,}$/,
    nombre:/^[a-zA-ZÀ-ÿ\s]{1,50}$/, 
    apellido:/^[a-zA-ZÀ-ÿ\s]{1,50}$/, 
    correo: /^[a-zA-Z0-9\_\-]+@misena\.edu\.co$/,
    contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?=.{10,})$/
}

const campos = {
	documento: false,
    nombre: false, 
    apellido: false, 
    nacimiento: false,
    correo: false,
    contrasena: false,
    valContrasena: false
}

const validarFormulario = (e) => {
	console.log(e.target.name)
	switch (e.target.name) {
		case "documento":
			validarCampo(expresiones.documento, e.target, 'documento');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
        case "nacimiento":
			validarEdad();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;

		case "constrasena":
			validarCampo(expresiones.contrasena, e.target, 'contrasena');
		break;
		case "valContrasena":
			validarvalContrasena();
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarvalContrasena = () => {
	const inputContrasena = document.getElementById('contrasena');
	const inputvalContrasena = document.getElementById('valContrasena');
	console.log(inputContrasena)
	console.log(inputvalContrasena)

	if(inputContrasena.value !== inputvalContrasena.value){
		document.getElementById(`grupo__valContrasena`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__valContrasena`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__valContrasena i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__valContrasena i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__valContrasena .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['valContrasena'] = false;
	} else {
		document.getElementById(`grupo__valContrasena`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__valContrasena`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__valContrasena i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__valContrasena i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__valContrasena .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['valContrasena'] = true;
	}
}

const validarEdad = () => {
    const inputNacimiento = document.getElementById('nacimiento').value;
    const anioNacimiento = (new Date(inputNacimiento)).getFullYear();
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    if(anioActual - anioNacimiento <= 18){
		document.getElementById(`grupo__nacimiento`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__nacimiento`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__nacimiento i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__nacimiento i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__nacimiento .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['nacimiento'] = false;
	} else {
		document.getElementById(`grupo__nacimiento`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__nacimiento`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__nacimiento i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__nacimiento i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__nacimiento .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['nacimiento'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.documento && campos.nombre && campos.apellido && campos.nacimiento && campos.correo && campos.contrasena && campos.correo && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});