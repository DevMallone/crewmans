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
  
  function exitTopics(){
  
    var openTopics = document.getElementById('topics')
    
    if (!openTopics.contains(e.target)) {
      openTopics.style.display = 'none';
    }
  }


  // carrossel slick js

 // CARROSSEL PRODUTOS EM DESTAQUES

$('.carrone').slick({
  prevArrow: '.slick-prev-one',
  nextArrow: '.slick-next-one',
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
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
