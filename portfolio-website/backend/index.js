// changes text of contact form
let contactHere = document.getElementById("contact-text")
contactHere.innerHTML = "Leave Me a Message!";

// adds an event listener for mouse enter and mouse leave, changing text of contact form
contactHere.addEventListener("mouseenter", (event) => {
    contactHere.innerHTML = "I would love to hear from you!";
    contactHere.classList.toggle("hover-effect");
  });

  contactHere.addEventListener("mouseleave", () => {
    contactHere.innerHTML = "Hope to talk to you soon!";
    contactHere.classList.toggle("hover-effect");
  });

// access contact form from html
document.getElementById("contact-form").addEventListener("submit", 

function(event) {

    // prevents the deafult, which is submitting the form before checking required inputs
    event.preventDefault();

    // declare variables of contact form
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let message = document.getElementById("message").value;

    //checks for valid patterns using regex
    let checkName = /^[a-zA-Z ]{2,30}$/;
    let checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let checkPhone = /^\d{10}$/;

    if (!name.match(checkName)) {
        alert("Invalid Name");
        return false;
    }

    if (!email.match(checkEmail)) {
        alert("Invalid Email Address");
        return false;
    }

    if (!phone.match(checkPhone)) {
        alert("Invalid Phone Number");
        return false;
    }

    // clears information after submitting form
    document.getElementById("contact-form").reset();
    // leaves message after submitting form 
    alert("Thank you for reaching out! I will get back to you shortly.")

});

// hamburger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// transforms input into name as uppercase
// function upperCase() {
//     const capitalize = nam;
//     capitalize.value = capitalize.value.toUpperCase();
// }