const bar = document.querySelectorAll(".disp-icon svg")
const openbar = document.querySelector(".disp-icon .open")
const closebar = document.querySelector(".disp-icon .close")
const dropList = document.querySelector(".topmenu")
const products = document.querySelectorAll(".product-img")
const ratingStar = document.querySelectorAll(".rating__stars span svg")
const logoHome = document.querySelector(".aceware-icon img")

window.addEventListener("scroll", () => {
   document.querySelector('nav').classList.toggle("scrolled", window.scrollY>100)
})
logoHome.addEventListener("click", () => {
   location.assign("../index.html");
})
const openBar = () => {
   closebar.style.display ="flex"
   openbar.style.display ="none"
   dropList.style.display ="flex"
} 

const closeBar = () => {
      closebar.style.display ="none"
      openbar.style.display ="flex"
      dropList.style.display ="none"
} 

const removePickerr = () => {
   products.forEach(product => {
      const pig =  product.querySelector(".color-select .selector")
         pig.classList.remove("active")
  
    })
}


const main = document.querySelector("main")
bar.forEach(bars => {
   bars.addEventListener("click", () => {
      if(bars.classList == "open"){
        openBar()
      }
      else{
         closeBar()    
      }
   })
      
   })

main.addEventListener("click", () => {
   if(dropList.style.display == "flex" && openBar){
     closeBar()
   }
})
products.forEach(product => {
   product.addEventListener("click", () => {
      location.assign("../HTML/sale.html");
   })
})


ratingStar.forEach(star => {
   star.onmouseover = () => {
      document.querySelector(".rate__us").style.visibility = "visible"
   }
   star.onmouseout = () => {
      document.querySelector(".rate__us").style.visibility = "hidden"
   }
   star.addEventListener("click", () => {

   if(star.style.fill == "rgb(233, 224, 211)"){
      star.style.fill = "var(--star-color)"
   }
   else{
         star.style.fill = "rgb(233, 224, 211)"
   }
})
})