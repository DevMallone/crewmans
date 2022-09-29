/************* NAVIGATION BAR **************/
window.addEventListener("scroll", function () {

  var header = document.querySelector("nav");
  header.classList.toggle("menu-scroll", window.scrollY > 10)
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

// CARROSSEL CATEGGORIES
$('.carrossel-categ').slick({
  prevArrow: '.slick-prev-categ',
  nextArrow: '.slick-next-categ',
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
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
        slidesToShow: 2,
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

// CARROSSEL PEOPLES WORK
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


/************* OPEN CONFIG **************/

const modal = document.querySelector('.content-config')
const btnConfigClose = document.querySelector('.fa-times')
const btnConfigOpen = document.querySelector('.fa-cog')

btnConfigClose.style.display = 'none';

function openConfig(){
  
  modal.style.display = 'block';
  btnConfigOpen.style.display = 'none';
  btnConfigClose.style.display = 'flex'
}

function fecha(){

  modal.style.display = 'none';
  btnConfigOpen.style.display = 'flex';
  btnConfigClose.style.display = 'none';

}

/************* DARKMODE **************/

function darkmode(){
  var setTheme = document.body
  setTheme.classList.toggle("light-mode")

  var theme;

  if(setTheme.classList.contains("light-mode")){
    
    theme = "DARK"

  }else{
    console.log("Light mode")
    theme= "LIGHT"
  }

  modal.style.display = "none";
  btnConfigOpen.style.display = 'flex';
  btnConfigClose.style.display = 'none';

  // Salvar no LOCALSTORAGE
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "DARK"){
  document.body.classList = "light-mode";
}

/************* MODALS PEOPLES **************/

const modalAna = document.getElementById("modalAna")
const modalAndrei = document.getElementById("modalAndrei")
const modalArthur = document.getElementById("modalArthur")
const modalEmyly = document.getElementById("modalEmyly")
const modalEster = document.getElementById("modalEster")
const modalJulia = document.getElementById("modalJulia")
const modalKaull = document.getElementById("modalKaull")

function openAnaModal(){
  modalAna.style.display = "flex";
}
function openAndreiModal(){
  modalAndrei.style.display = "flex";
}
function openArthurModal(){
  modalArthur.style.display = "flex";
}
function openEmylyModal(){
  modalEmyly.style.display = "flex";
}
function openEsterModal(){
  modalEster.style.display = "flex";
}
function openJuliaModal(){
  modalJulia.style.display = "flex";
}
function openKaullModal(){
  modalKaull.style.display = "flex";
}

function closeModalPeople(){
  modalAna.style.display = 'none';
  modalAndrei.style.display = "none";
  modalArthur.style.display = "none";
  modalEmyly.style.display = "none";
  modalEster.style.display = "none";
  modalJulia.style.display = "none";
  modalKaull.style.display = "none";
}
