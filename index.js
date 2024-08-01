



// access contact form from html
document.getElementById("contact-form").addEventListener("submit", 
    
function(event) {

    // prevents the deafult, which is submitting the form before checking required inputs
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let message = document.getElementById("message").value;

    //checks for valid email pattern using regex
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
    alert("Thank you for reaching out! I will get back to you shortly.")

});