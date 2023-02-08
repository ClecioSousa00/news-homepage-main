let iconMenu = document.querySelector('#icon_menu')
let iconClose = document.querySelector('#icon_close')
let navBar = document.querySelector('#nav__bar')

iconMenu.addEventListener('click',()=>{
    navBar.classList.toggle('active')
})
iconClose.addEventListener('click',()=>{
    navBar.classList.toggle('active')
})