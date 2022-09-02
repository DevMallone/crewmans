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
  var linkModal = document.getElementById('content')
  
  menu.style.display = "none";
  abrirMenu.style.display = "flex"
  fecharMenu.style.display = "none"
  linkModal.style.display = "none"
}

function openTopics(){
  
  var openTopics = document.getElementById('topics')
  openTopics.style.display = "flex"
}


// CARROSSEL PRODUTOS EM DESTAQUES

$('.carrossel').slick({
  prevArrow: '.slick-prev-one',
  nextArrow: '.slick-next-one',
  autoplay: true,
  autoplaySpeed: 3000,
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

/************* MODALS **************/

const contentOli = document.getElementById('contentOli')
const contentIrep = document.getElementById('contentIrep')
const contentDesi = document.getElementById('contentDesi')
const content1War = document.getElementById('content1War')

const closedAll = document.getElementsByClassName('btn-close-modal')

function openModalOli(){
  contentOli.style.display = "flex"
}

function openModalIrep(){
  contentIrep.style.display = "flex"
}

function openModalDesi(){
  contentDesi.style.display = "flex"
}

function openModal1War(){
  content1War.style.display = "flex"
}

function fecharmodal(){
  
  contentOli.style.display = "none"
  contentIrep.style.display = "none"
  contentDesi.style.display = "none"
  content1War.style.display = "none"
}
