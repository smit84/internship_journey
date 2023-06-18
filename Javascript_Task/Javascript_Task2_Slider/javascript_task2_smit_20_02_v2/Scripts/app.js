
var slideNum = 0;
var b="false";
showSlides();

let timeOut=setInterval(showSlides, 2000);

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideNum++;
  if (slideNum > slides.length) {slideNum = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNum-1].style.display = "block";  
  dots[slideNum-1].className += " active";
  
}


function play(){
  if(b==="true"){
    clearInterval(timeOut);
    timeOut=setInterval(showSlides,2000);
    b="false";
  }    
}


function stopSlides() {
  if(b==="false"){
    clearInterval(timeOut);
    b="true";
  }
  }



function nextSlide(n) {
  clearInterval(timeOut);
  showSlide(slideNum += n);
  b="true";
}  
function prevSlide(n) {
  clearInterval(timeOut);
  showSlide(slideNum += n);
  b="true";

}
function showDot(n){
  clearInterval(timeOut);
  showSlide(slideNum=n);
  b="true";
}


function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideNum = 1}    
  if (n < 1) {slideNum = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNum-1].style.display = "block";  
  dots[slideNum-1].className += " active";
}