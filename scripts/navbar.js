
const hamb = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav__bar')
const linkNav = document.querySelector('.linkNav')

function closeNavBar (name){
 name.classList.toggle('desactive')
} 

navBar.onclick = ()=>{
  closeNavBar(navBar) 
}

hamb.onclick = () => {
  closeNavBar(navBar)
}