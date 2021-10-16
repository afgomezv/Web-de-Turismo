
const formulario = document.getElementById('form-registro');
const inputs = document.querySelectorAll('#form-registro .input');


const expresiones = {
  numero:/^[0-9]{8,10}$/, //Numeros del documento
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //correo electronico
	contrasena: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, // de 8 digitos o mas.
}


const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'numero':
      checkNumDocument(e.target)
    break;
    case 'correo':
      checkCorreo(e.target)
    break;
    case 'contrasena':
      checkContrasena(e.target)
    break;
  }
}

const checkNumDocument = (input) => {
  const numero = /^[0-9]{8,10}$/;
  if (numero.test(input.value)) {
    document.getElementById('grupo__numero').classList.remove('grupo-incorrecto');
    document.getElementById('grupo__numero').classList.add('grupo-correcto');
    document.querySelector('#grupo__numero i').classList.add('fa-check-circle')
    document.querySelector('#grupo__numero i').classList.remove('fa-times-circle')
    return true
  }else{
    document.getElementById('grupo__numero').classList.add('grupo-incorrecto');
    document.getElementById('grupo__numero').classList.remove('grupo-correcto');
    document.querySelector('#grupo__numero i').classList.add('fa-times-circle')
    document.querySelector('#grupo__numero i').classList.remove('fa-check-circle')
    return false
  }
}

const checkCorreo = (input) => {
  const correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (correo.test(input.value)) {
    document.getElementById('grupo__correo').classList.remove('grupo-incorrecto');
    document.getElementById('grupo__correo').classList.add('grupo-correcto');
    document.querySelector('#grupo__correo i').classList.add('fa-check-circle')
    document.querySelector('#grupo__correo i').classList.remove('fa-times-circle')
    return true
  }else{
    document.getElementById('grupo__correo').classList.add('grupo-incorrecto');
    document.getElementById('grupo__correo').classList.remove('grupo-correcto');
    document.querySelector('#grupo__correo i').classList.add('fa-times-circle')
    document.querySelector('#grupo__correo i').classList.remove('fa-check-circle')
    return
    false
  }
}

const checkContrasena = (input) => {
  const contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (contrasena.test(input.value)) {
    document.getElementById('grupo__contrasena').classList.remove('grupo-incorrecto');
    document.getElementById('grupo__contrasena').classList.add('grupo-correcto');
    document.querySelector('#grupo__contrasena i').classList.add('fa-check-circle')
    document.querySelector('#grupo__contrasena i').classList.remove('fa-times-circle')
    return true
  }else{
    document.getElementById('grupo__contrasena').classList.add('grupo-incorrecto');
    document.getElementById('grupo__contrasena').classList.remove('grupo-correcto');
    document.querySelector('#grupo__contrasena i').classList.add('fa-times-circle')
    document.querySelector('#grupo__contrasena').classList.remove('fa-check-circle')
    return false
  }
}


inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
});