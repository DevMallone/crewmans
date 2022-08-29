/************* NAVIGATION BAR **************/
window.addEventListener("scroll", function () {

  var header = document.querySelector("nav");
  header.classList.toggle("menu-scroll", window.scrollY > 0)
})


/************* MENU RESPONSIVE **************/

let menu = document.getElementById('menuEvent')

function abrirMenu(){

  var fecharMenu = document.getElementById('fecharBtn')
  var abrirMenu = document.getElementById('abrirBtn')

  menu.style.display = "flex"
  fecharMenu.style.display = "flex"
  abrirMenu.style.display = "none"
}

function fecharMenu(){

  
  var fecharMenu = document.getElementById('fecharBtn')
  var abrirMenu = document.getElementById('abrirBtn')

  menu.style.display = "none"
  abrirMenu.style.display = "flex"
  fecharMenu.style.display = "none"
}

function linkFechar(){

  
  var fecharMenu = document.getElementById('fecharBtn')
  var abrirMenu = document.getElementById('abrirBtn')

  menu.style.display = "none";
  abrirMenu.style.display = "flex"
  fecharMenu.style.display = "none"
}

function openTopics(){
  
  var openTopics = document.getElementById('topics')
  openTopics.style.display = "flex"
}


// CARROSSEL PRODUTOS EM DESTAQUES

$('.carrossel').slick({
  // prevArrow: '.slick-prev-one',
  // nextArrow: '.slick-next-one',
  autoplay: true,
  arrows: false,
  autoplaySpeed: 4000,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// MODALS

const content = document.getElementById('content')
const closeBtnModal = document.getElementsByClassName('btn-close-modal')

function openModal(){
  content.style.display = "flex"
}

function fecharmodal(){
  content.style.display = "none"
}
