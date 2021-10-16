// 

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



