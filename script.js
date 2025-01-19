const slides=document.querySelectorAll(".slide")

for(const slide of slides){
    slide.addEventListener("click", ()=>{
        clearactiveclasses()
        slide.classList.add("active")
    })
}

function clearactiveclasses(){
    slides.forEach(slide=>slide.classList.remove("active"))
}

let allslides=document.getElementsByClassName("slide")
let navlinks=document.getElementsByClassName("slidernav")
let currentslide=0
document.getElementById("navbuttonprev").addEventListener("click", ()=>{
    changeslide(currentslide-1)
})
document.getElementById("navbuttonnext").addEventListener("click", ()=>{
    changeslide(currentslide+1)
})

function changeslide(moveto){
    if(moveto>4){moveto=0}
    if(moveto<0){moveto=4}
    allslides[currentslide].classList.toggle("active")
    navlinks[currentslide].classList.toggle("active")
    allslides[moveto].classList.toggle("active")
    navlinks[moveto].classList.toggle("active")
    currentslide=moveto
}
document.querySelectorAll(".slidernavlink").forEach((bullet, bulletindex)=>{
    bullet.addEventListener("click",()=>{
        if(currentslide!==bulletindex){
            changeslide(bulletindex)
        }
    })
})