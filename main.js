const menu = document.querySelector(".menu__hambuger")
const menuNav = document.querySelector(".menu__hambuger--list")
const nav = document.querySelector("nav")
const navMenu = document.querySelector(".nav__menu--holder")
const menuList = document.querySelectorAll(".nav__menu--list")

let showMenu = false;

menu.addEventListener("click", toggle)


function toggle() {
    if (!showMenu){
        menuNav.classList.add("open")
        nav.classList.add("open")
        navMenu.classList.add("open")
        menuList.forEach(list => list.classList.add("open") )
        showMenu = true   
    }
    else{
        menuNav.classList.remove("open")
        nav.classList.remove("open")
        navMenu.classList.remove("open")
        menuList.forEach(list => list.classList.remove("open") )
        showMenu = false
    }
}

const year = new Date().getFullYear()
const footerYear= document.querySelector("footer span")

footerYear.textContent=year