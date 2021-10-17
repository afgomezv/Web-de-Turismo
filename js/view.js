// FUNCIONALIDADES DEL LOGIN REGISTRO 

let inicioSeccion = document.getElementById('inicio-seccion');
let registro = document.getElementById('registro');
inicioSeccion.addEventListener('click', login);
registro.addEventListener('click', register)

let login1 = document.getElementById('login');
let formRegistro = document.getElementById('form-registro');
let btn = document.getElementById('btn')

function register() {
  login1.style.left='-300px';
  formRegistro.style.left='0';
  btn.style.left='118.5px';
};

function login(){
  login1.style.left='0';
  formRegistro.style.left='300px';
  btn.style.left='0';
}

// FUNCIONALIDADES DEL HEADER

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () =>{
    searchForm.classList.toggle('active');
    formulario.classList.remove('active');
  
}

let formulario = document.querySelector('.formulario');

document.querySelector('#user').onclick = () =>{
    formulario.classList.toggle('active');
    searchForm.classList.remove('active');
    
}

let menuBars = document.querySelector('.navbar');

document.querySelector('#menu-bars').onclick = () =>{
  menuBars.classList.toggle('active');
  searchForm.classList.remove('active');
  formulario.classList.remove('active');
}


// CARRUSEL

var swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
      });

//  VALIDACION DE LOS FORMULARIOS

const expresiones = {
  numero: /^[0-9]{8,10}$/, //numeros
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //correo electronico
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  contrasena: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ // Al menos un digito mayuscula, minuscula, numerico
}

const formularioInicio = document.getElementById('login');
const inputsInicio = document.querySelectorAll('#login .input');

const formularioRegistro = document.getElementById('form-registro');
const inputsRegistro = document.querySelectorAll('#form-registro .input');

const validarIncio = (e) => {
  switch (e.target.name) {
    case 'correo-inicio':
      validarCampo(expresiones.correo, e.target, 'icorreo')
    break
    case 'contrasena-inicio':
      validarCampo(expresiones.contrasena, e.target, 'icontrasena')
    break
  }
}

const validarRegistro = (e) => {
  switch (e.target.name){
    case 'numero':
      validarCampo(expresiones.numero, e.target, 'numero');
    break
    case 'correo':
      validarCampo(expresiones.correo, e.target, 'correo')
    break
    case 'nombre':
      validarCampo(expresiones.nombre, e.target, 'nombre')
    break
    case 'apellido':
      validarCampo(expresiones.apellido, e.target, 'apellido')
    break
    case 'contrasena':
      validarCampo(expresiones.contrasena, e.target, 'contrasena')
    break
    case 'contrasena2':
      validarContrasena2();

    break
  }
}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');

      }else {
        document.getElementById(`grupo__${campo}`).classList.add('grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
      }
}

const validarContrasena2 = () => {
  const inputcontrasena = document.getElementById('contrasena');
  const inputcontrasena2 = document.getElementById('contrasena2');
  if(inputcontrasena.value !== inputcontrasena2.value){
    document.getElementById(`grupo__contrasena2`).classList.add('grupo-incorrecto')
    document.getElementById(`grupo__contrasena2`).classList.remove('grupo-correcto')
    document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-check-circle');
  }else {
    document.getElementById(`grupo__contrasena2`).classList.remove('grupo-incorrecto')
    document.getElementById(`grupo__contrasena2`).classList.add('grupo-correcto')
    document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-check-circle');
  }
}

inputsInicio.forEach((input)=>{
  input.addEventListener('keyup', validarIncio)
  input.addEventListener('blur', validarIncio)
})

inputsRegistro.forEach((input)=>{
  input.addEventListener('keyup', validarRegistro)
  input.addEventListener('blur', validarRegistro)
})

formularioInicio.addEventListener('submit', (e) => {
  e.preventDefault();
})

formularioRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
})


