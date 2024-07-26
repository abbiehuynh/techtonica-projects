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

// change padding of elements
// document.getElementById("recipeHeader").style.padding = "10px";

// creates rounded border radius 
// function roundCorners(round) {
//     document.getElementById("recipeHeader").style.borderRadius = round;
//     // come back to this
//     // document.querySelectorAll("description").style.borderRadius = round;
// }
// window.addEventListener("load", function(){ roundCorners("25px") });
// label - ingredient, label text innerHTML

// adds checkboxes to ingredients list
let ingredientsList = document.getElementById("ingredientsList");
let listItemsArr = Array.from(ingredientsList.getElementsByTagName("li"));

listItemsArr.forEach(item => {
  let text = item.innerText;
  item.innerHTML = `<input type='checkbox' class="checkbox" onclick="strikeThrough(this)" value='${text}'> ${text}</input>`;
});

// adds strikethrough to checkboxes when clicked
let checkbox = document.getElementsByClassName("checkbox");

//this is striking through all item, how to say just stike the item at 
//the same position? [i]
function strikeThrough(checkbox) {
    if (checkbox.checked) {
        ingredientsList.style.textDecoration = "line-through";
    } else {
        ingredientsList.style.textDecoration = "none";
    }   
};

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
// checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
// checkbox.id = "id";

// let label = document.createElement("label");
// label.htmlFor = "id";

// let ingredientsClass = ingredientsList.querySelectorAll(".ingredients");
// let ingredients = ingredientsClass.children;
// // label.appendChild(listItems);
// console.log(ingredients);
// ingredientsDiv.appendChild("label");
// ingredientsList.appendchild(checkbox);
// ingredientsList.appendChild(label);
