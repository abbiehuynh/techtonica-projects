
// Adds statment after congratulations!
var enjoy = document.getElementById("congratulations");
var enjoyText = document.createTextNode(" Enjoy your yummy baked mac and cheese!");
enjoy.appendChild(enjoyText);

// function style() {
// const ingredientsHeader = document.getElementsById("ingredientsHeader");
//     ingredientsHeader.style.color = "red";
// }

// button: changes background color
function backgroundColor(){
    document.body.style.backgroundColor = "white";
}

// button "cool"
function clickMe() {
    document.getElementById("cool").innerHTML = "You're so cool!";
}

// button "cohort"
function clickMeTwo() {
    document.getElementById("cohort").innerHTML = "We're going to get through this together!";
}

// changes background color of page when page loads
function changeBackgroundColor(color) {
    document.body.style.background = color;
    document.getElementById("img").style.background = color;
}
window.addEventListener("load",function(){ changeBackgroundColor("#b3d9ae")});

// b3d9ae

// changes margin 
function changeMargin(margin) {
    document.getElementById("recipeHeader").style.margin = margin;
}
window.addEventListener("load", function(){ changeMargin("10px 400px") });


// change padding of elements
document.getElementById("recipeHeader").style.padding = "10px 10px 10px 10px";

// creates rounded border radius 
function roundCorners(round) {
    document.getElementById("recipeHeader").style.borderRadius = round;
    // come back to this, how to do class name?
    // document.querySelectorAll("description").style.borderRadius = round;
}
window.addEventListener("load", function(){ roundCorners("25px") });

// checkboxes
let ingredientsList = document.getElementById("ingredientsList");
// select the list and modify each individual list item
// for each item, keep innertext, but turn content into an input checkbox

let listItems = Array.from(ingredientsList.getElementsByTagName("li"));

listItems.forEach(item => {
  let text = item.innerText;
  item.innerHTML = `<input type='checkbox' value='${text}'> ${text}</input>`;
});