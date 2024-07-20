
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
