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
    var n = 0;

    let prevSet = document.querySelectorAll(".image-set .prev");

    for(i=0; i<prevSet.length; i++){
      prevSet[i].addEventListener("click",function(e){
        //searches backwards and looks for parents
        
        let parent = this.closest(".image-set");
        let setName = parent.dataset.setname;
        if (n > 3) {n = 0}
        if (n < 1) {n = 4}
        showSlides(n-=1,setName);

      })
    }

    let nextSet = document.querySelectorAll(".image-set .next");

    for(i=0; i<nextSet.length; i++){
      nextSet[i].addEventListener("click",function(e){

        //searches backwards and looks for parents
    
        let parent = this.closest(".image-set");
        let setName = parent.dataset.setname;
        if (n > 2) {n = -1}
        showSlides(n+=1,setName);

      })
    }

    let modalTriggerSet = document.querySelectorAll(".modal-trigger");

    for(i=0; i<modalTriggerSet.length; i++){
      console.log("AAA")
      modalTriggerSet[i].addEventListener("click",function(e){
        //searches backwards and looks for parents
        let setName = this.dataset.setname;
        displayModal(setName);
      })
    }
})


document.querySelector(".learn-more").addEventListener("click", function(){
    document.querySelector(".about-me-text").innerHTML += '<p class="extra-text"> I graduated from Cal Poly Pomona in 2022 with a degree in Business Administration, emphasis Computer Information Systems. While in this program I learned about Big Data and Data Analysis! <br> I also dedicated a lot of time to dance while in college. I danced on a dance team called Zero Below and currently dance on both Snowtorious and Snowmies. I have gotten a lot of dance opportunites thanks to my time with these teams. I danced in 2021 and 2022 at Knotts Scary Farm as a part of the stage shows "Doce De La Noche" and "De Carnival Du Grotesque". Another notable moment was dancing at Disneyland as part of a flash mob for the 100 Year Celebration!</p>';

    document.querySelector(".about-me-text").classList.remove('about-me-text');

})


  
  function closeModal() {
    document.getElementById("mydanceModal").style.display = "none";
    document.getElementById("myartModal").style.display = "none";
    document.getElementById("myconstructionModal").style.display = "none";
  }
  
  var slideIndex = 1;
  

  

    
function currentConstructionSlide(n) {
    showSlides(n,"construction");
  }

function currentDanceSlide(n) {
    showSlides(n,"dance");
  }
    
function currentArtSlide(n) {
    showSlides(n,"art");
  }
  


  
function showSlides(n,name) {
    // Depending on name collect the respective elements
    //
    var i;
    var selectedSlides = document.getElementsByClassName("my"+name+"Slides");
    var selectedDots = document.getElementsByClassName(name+"Demo");
    var selectedText = document.getElementById(name+"Caption");

    console.log(n);
    console.log(selectedSlides)
   
    // var selectedSlides = "my"+name+"Slides"
    //var slides document.getElementsByClassName(selectedSlides);
    //emulate this for all vars
    //use this model on all other seperated functions

    for (i = 0; i < selectedSlides.length; i++) {
        selectedSlides[i].style.display = "none";
    }
    for (i = 0; i < selectedDots.length; i++) {
        selectedDots[i].className = selectedDots[i].className.replace(" active", "");
    }
    console.log(n)
    selectedSlides[n].style.display = "block";
    selectedDots[n].className += " active";
    selectedText.innerHTML = selectedDots[n].alt;
  }

function displayModal(name){
  var selectedModal = document.getElementById("my"+name+"Modal");
  console.log(selectedModal);
  selectedModal.style.display = "block";
  showSlides(0,name)

}






document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const serviceID = "service_dhnwojh";
      const templateID = "template_t3ze5wb";

      // send the email here
      emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("FAILED...", error);
        }
      );
    });



