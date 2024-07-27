// Adds statement after "congratulations...
let enjoy = document.getElementById("congratulations");
let enjoyText = document.createTextNode(" Enjoy your yummy baked mac and cheese!");
enjoy.appendChild(enjoyText);

/* for funsies
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
*/ 

// ---WHEN PAGE LOADS---
// changes background color of page when page loads
function changeBackgroundColor(color) {
    document.body.style.background = color;
    document.getElementById("img").style.background = color;
}
window.addEventListener("load",function(){ changeBackgroundColor("#82b27c")});

// changes margin or recipeHeader
function changeMargin(margin) {
    document.getElementById("recipeHeader").style.margin = margin;
}
window.addEventListener("load", function(){ changeMargin("70px 10px 10px") });

// ---INGREDIENTS---
// Ingredients List
let ingredientsList = [
    "1 lb. dried elbow pasta",
    "1/2 cup unsalted butter",
    "1/2 cup all purpose flour",
    "1 1/2 cups whole milk",
    "2 1/2 cups half and half",
    "4 cups shredded medium cheddar cheese divided (after shredding)",
    "2 cups shredded Gruyere cheese divided (after shredding)",
    "1/2 Tbsp. salt",
    "1/2 tsp. black pepper",
   " 1/4 tsp. paprika"
];

let ingredientsListDiv = document.getElementById("ingredientsListDiv");

// create list, checkbox, and label 
ingredientsList.forEach(item => {
    let list = document.createElement("ul");

    let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = item;

    let label = document.createElement("label");
    label.htmlFor = item;

    label.appendChild(document.createTextNode(item));
    list.appendChild(checkbox);
    list.appendChild(label);
    ingredientsListDiv.appendChild(list);

    // styling 
    list.style.fontFamily = "'Poppins', sans-serif";
    list.style.fontSize = "1.5em";
    
    ingredientsListDiv.style.margin = "20px";
    ingredientsListDiv.style.padding = "30px 25px 10px";
    ingredientsListDiv.style.borderRadius = "40px";
    ingredientsListDiv.style.backgroundColor = "#b3d9ae";

});

// ---STRIKETHROUGH TEXT---
// create strikeThrough when checkbox is clicked
// function strikeThrough()) {
//     if (checkbox.checked) {
//         ingredientsList.style.textDecoration = "line-through";
//     } else {
//         ingredientsList.style.textDecoration = "none";
//     }   
// };

// let item = event.currentTarget;
//     item.style.textDecoration = "line-through";
       

// ingredientsList.style.textDecoration = "line-through";
// } else {
//     ingredientsList.style.textDecoration = "none";
// }   
// console.log(strikeThrough(e));

// please ignore below
// checkbox.addEventListener("change", function() {
//     listItems.style.textDecoration = checkbox.checked ? "line-through" : "none";
// });

// for (let i = 0; i < checkbox.length; i++) {
//     checkbox[i].addEventListener("click", strikeThrough);
// }

// window.addEventListener("onclick", function(){}
// )

// function check() {
//     if (this.checked) {
//         checkbox.style.textDecoration = "line-through";
//     } else {
//         checkbox.style.textDecoration = "none";
//     }
// };
// checkbox.addEventListener("change",