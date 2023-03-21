document.addEventListener('DOMContentLoaded', function(event) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    
    var splitHeight = height/4;
    var splitWidth = width/4;

    console.log(splitHeight)
    console.log(splitWidth)
    console.log(typeof(splitWidth))

    document.querySelectorAll(".container-fluid").forEach(function(e){
        console.log(e)

        e.style.paddingTop = splitHeight + "px";
        e.style.paddingBottom = splitHeight + "px";


    });
})


document.querySelector(".learn-more").addEventListener("click", function(){
    document.querySelector(".about-me-text").innerHTML += '<p class="extra-text"> I graduated from Cal Poly Pomona in 2022 with a degree in Business Administration, emphasis Computer Information Systems. While in this program I learned about Big Data and Data Analysis! <br> I also dedicated a lot of time to dance while in college. I danced on a dance team called Zero Below and currently dance on both Snowtorious and Snowmies. I have gotten a lot of dance opportunites thanks to my time with these teams. I danced in 2021 and 2022 at Knotts Scary Farm as a part of the stage shows "Doce De La Noche" and "De Carnival Du Grotesque". Another notable moment was dancing at Disneyland as part of a flash mob for the 100 Year Celebration!</p>';

    document.querySelector(".about-me-text").classList.remove('about-me-text');

})

document.querySelector(".constructionModalClick").addEventListener("click", function(){
    document.querySelector(".constructionModal").style.display = "block";
})

document.querySelector(".danceModalClick").addEventListener("click", function(){
    document.querySelector(".danceModal").style.display = "block";
})

document.querySelector(".artModalClick").addEventListener("click", function(){
    document.querySelector(".artModal").style.display = "block";
})

  
function closeModal() {
    document.querySelector(".constructionModal").style.display = "none";
    document.querySelector(".danceModal").style.display = "none";
    document.querySelector(".artModal").style.display = "non";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }