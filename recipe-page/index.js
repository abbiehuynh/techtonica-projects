

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

    // appending 
    label.appendChild(document.createTextNode(item));
    list.appendChild(checkbox);
    list.appendChild(label);
    ingredientsListDiv.appendChild(list);

    // styling 
    checkbox.style.marginRight = "20px";

    list.style.fontFamily = "'Poppins', sans-serif";
    list.style.fontSize = "1.4em";
    
    ingredientsListDiv.style.margin = "20px";
    ingredientsListDiv.style.padding = "30px 25px 10px";
    ingredientsListDiv.style.borderRadius = "40px";
    ingredientsListDiv.style.backgroundColor = "#b3d9ae";

    // strikethrough ingredient when checkbox is clicked
    checkbox.addEventListener("click", strikeThrough);
    function strikeThrough() {
        if (this.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    };

});