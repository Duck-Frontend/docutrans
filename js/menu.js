const phoneMenu = document.querySelector(".phone-button")
const burgerMenu = document.querySelector(".burger-button")
const closeMenu = document.querySelector('.close-menu')


phoneMenu.addEventListener('click', ()=>{
    console.log("click 1");
    
  })
  
  burgerMenu.addEventListener('click', (e)=>{
    phoneMenu.classList.add("disable")
    burgerMenu.classList.add("disable")
    closeMenu.classList.remove("disable")
    document.querySelector(".burger__nav").classList.remove("disable")
  })
  closeMenu.addEventListener("click", ()=>{
    phoneMenu.classList.remove("disable")
    burgerMenu.classList.remove("disable")
    closeMenu.classList.add("disable")
    document.querySelector(".burger__nav").classList.add("disable")
    document.querySelector(".phone__nav").classList.add("disable")
  })
  phoneMenu.addEventListener('click', ()=>{
    phoneMenu.classList.add("disable")
    burgerMenu.classList.add("disable")
    closeMenu.classList.remove("disable")
    document.querySelector(".phone__nav").classList.remove("disable")
  })