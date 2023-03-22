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

document.querySelector(".construction-modal-trigger").addEventListener("click", function(){
    document.getElementById("myConstructionModal").style.display = "block";})

document.querySelector(".dance-modal-trigger").addEventListener("click", function(){
    document.getElementById("myDanceModal").style.display = "block";})

document.querySelector(".art-modal-trigger").addEventListener("click", function(){
    document.getElementById("myArtModal").style.display = "block";})

  
  function closeModal() {
    document.getElementById("myDanceModal").style.display = "none";
    document.getElementById("myArtModal").style.display = "none";
    document.getElementById("myConstructionModal").style.display = "none";
  }
  
  var slideIndex = 1;
  
function plusConstructionSlides(n) {
    showConstructionSlides(slideIndex += n);
  }

function plusDanceSlides(n) {
    showDanceSlides(slideIndex += n);
  }
function plusArtSlides(n) {
    showArtSlides(slideIndex += n);
  }
  
function currentConstructionSlide(n) {
    showConstructionSlides(slideIndex = n);
  }
    
function currentDanceSlide(n) {
    showDanceSlides(slideIndex = n);
  }
    
function currentArtSlide(n) {
    showArtSlides(slideIndex = n);
  }
  
function showConstructionSlides(n) {
    var i;
    var constructionSlides = document.getElementsByClassName("myConstructionSlides");
    var constructionDots = document.getElementsByClassName("constructionDemo");
    var constructionCaptionText = document.getElementById("constructionCaption");
    if (n > constructionSlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = constructionSlides.length}
    for (i = 0; i < constructionSlides.length; i++) {
        constructionSlides[i].style.display = "none";
    }
    for (i = 0; i < constructionDots.length; i++) {
        constructionDots[i].className = constructionDots[i].className.replace(" active", "");
    }
    constructionSlides[slideIndex-1].style.display = "block";
    constructionDots[slideIndex-1].className += " active";
    constructionCaptionText.innerHTML = constructionDots[slideIndex-1].alt;
  }
  function showDanceSlides(n) {
    var i;
    var danceSlides = document.getElementsByClassName("myDanceSlides");
    var danceDots = document.getElementsByClassName("danceDemo");
    var danceCaptionText = document.getElementById("danceCaption");
    if (n > danceSlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = danceSlides.length}
    for (i = 0; i < danceSlides.length; i++) {
        danceSlides[i].style.display = "none";
    }
    for (i = 0; i < danceDots.length; i++) {
        danceDots[i].className = danceDots[i].className.replace(" active", "");
    }
    danceSlides[slideIndex-1].style.display = "block";
    danceDots[slideIndex-1].className += " active";
    danceCaptionText.innerHTML = danceDots[slideIndex-1].alt;
  }
  function showArtSlides(n) {
    var i;
    var artSlides = document.getElementsByClassName("myArtSlides");
    var artDots = document.getElementsByClassName("artDemo");
    var artCaptionText = document.getElementById("artCaption");
    if (n > artSlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = artSlides.length}
    for (i = 0; i < artSlides.length; i++) {
        artSlides[i].style.display = "none";
    }
    for (i = 0; i < artDots.length; i++) {
        artDots[i].className = artDots[i].className.replace(" active", "");
    }
    artSlides[slideIndex-1].style.display = "block";
    artDots[slideIndex-1].className += " active";
    artCaptionText.innerHTML = artDots[slideIndex-1].alt;
  }