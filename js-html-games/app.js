// create an event listener for when DOM is loaded, starts game
document.addEventListener("DOMContentLoaded", function() {
    // creates variables to access elements in html
    const cat = document.querySelector(".cat");
    const grid = document.querySelector(".grid");
    const alert = document.getElementById("alert");

    // create variables for jump function
    let gravity = 0.9;

    // control function, pressing space bar triggers jump function
    function control(e) {
        // creates connection to space bar to jump
        if (e.code === "Space") {
            console.log("jump");
            jump();
        }

    // prevent user from double jumping while jumping
    }

    // creates variable to override position of cat in css
    let position = 0;

    // jump function 
    function jump() {
        // schedules the function to be executed repeatedly after a period of time
        let timerId = setInterval(function () {
            
            // ability to move up, incrementing the position of the cat
            position += 30;
            // overrides position, multiplying by gravity to slow down jump 
            position = position * gravity;
            cat.style.bottom = position + "px";
        }, 20);
    

        // ability to move back down, create jump height limit
        // override css position
    }

    // obstacle generator funciton
        // while game is not game over, generate obstacles
        // randomize generating
        // override css position 

        // removing obstacles when game is over


    // alerting when game is over


    // creates event listener for if a key is pressed down, calls the control function
    document.addEventListener("keydown", control);
})

