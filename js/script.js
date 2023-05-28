const navbarButton = document.querySelector(".menu-button")
const navlinks = document.querySelector(".navlinks")

navbarButton.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile-menu')
})