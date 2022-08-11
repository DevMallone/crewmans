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
