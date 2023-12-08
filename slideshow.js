const slideshow = document.querySelector(".slideshow-container")
//console.log(slideshow.childNodes)
const allSlides =  slideshow.querySelectorAll("div.mySlides.fade")
const prev = slideshow.querySelector(".prev")
const next = slideshow.querySelector(".next")

let activeIndex = 0
let totalCount = allSlides.length
const setActiveSlide = function(index){
    activeIndex = index
    for(let i = 0; i <= totalCount; i++){
        if (i === index){
            allSlides[i].style.display="block";
        }else {
            allSlides[i].style.display="none";
        }
    }
}


prev.addEventListener("click",function(){
    if(activeIndex === 0){
        activeIndex = totalCount - 1
    }else{
        activeIndex = activeIndex - 1 
    }
    setActiveSlide(activeIndex)
})


next.addEventListener("click",function(){
    if(activeIndex === totalCount - 1){
        activeIndex = 0
    }else{
        activeIndex = activeIndex + 1 
    }
    setActiveSlide(activeIndex)
})


setActiveSlide(0)
