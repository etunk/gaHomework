/* 
  Some specific vocabulary used with arrays and loops:

  index - the numbered position of each item in the array, starting at 0
  iterate - to access each item in an array one by one
  bracket notation - the syntax that uses square brackets to access a specific item by its index
*/



// Exercise 1 - length

let theAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write a function called alphabetLength that takes one array as a parameter and returns the length of that array 
function alphabetLength(list){
  var listLength = list.length;
  return listLength;
}

// Print your answer to the dom
document.querySelector("#exercise-one").textContent = alphabetLength(theAlphabet); 



// Exercise 2 - push and pop

// Create a planets array that has nine string values in it
function exercise2(){
let planetsArray = ["Planet 1","Planet 2","Planet 3","Planet 4","Planet 5","Planet 6","Planet 7","Planet 8","Planet 9"]

planetsArray.pop()
console.log(planetsArray)

planetsArray.push("Planet Sheen")
console.log(planetsArray)

document.querySelector("#exercise-two").textContent = planetsArray.join(", ")
}


// Exercise 3 - for loop

let snacks = ["candy", "popcorn", "potato chips", "fruit", "nuts"];

// Create a for loop that prints each snack item to the console along with its index (ex: "3. fruit")
for(let i=0; i<snacks.length; i++){
  console.log( i+1 + ". " + snacks[i])
}
// Bonus - use string interpolation or a "template string" to print your string to the console (google it)
// Ex: `Notice the backticks instead of quotes. This is string interpolation syntax with a ${variable}`




// Exercise 4 - for loop with a conditional

// Create a for loop that iterates over the snack array, but only prints "My favorite snack is (your favorite snack)" to the dom

const favSnack = "potato chips";

for (let i =0; i<snacks.length; i++){
  if (snacks[i] == favSnack){
    document.querySelector("#exercise-two").textContent = "My favorite snack is " + snacks[i];
  }
}




// Exercise 5 - for loop with new dom elements

const pets = ["cat", "dog", "iguana", "guinea pig", "rabbit", "hedge hog", "parakeet"]

// Create a for loop that creates and prints a new li for each item in the pet array
for (let i =0; i<pets.length; i++){
  let swagPets = document.createElement("li");
  swagPets.innertext(pets[i]);
}