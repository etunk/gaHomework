document.addEventListener('DOMContentLoaded', function(event) {
    console.log("Hi 1")
    document.querySelectorAll(".breedContainer .toggler").forEach(function(element){
        console.log("Hi 2")
        console.log(this)
        element.addEventListener("click",function(){
        this.parentElement.classList.toggle("breedContainerLG");
        if(this.getAttribute('src') =="img/240px-Gnome-window-close.svg.png" ){
            this.setAttribute('src',"img/48px-Gnome-list-add.svg.png");
        }else{
            this.setAttribute('src',"img/240px-Gnome-window-close.svg.png");
        }
    });
});

document.querySelector("#breedType").addEventListener('change',function(){
    var showType = this.value;
        console.log(showType)

        // For each article tag in the class breedsOuterContainer
        document.querySelectorAll(".breedsOuterContainer article").forEach(function(elements){

            // Check to see if we are showing all and/or the article has the desired class
            if(elements.classList.contains(showType) || showType == "all"){
                // Article has the class
                elements.style.display = 'inline-block';
            }else{
                // Article does NOT have the class
                elements.style.display = 'none';
            }
        });
    });
    
   
    
});