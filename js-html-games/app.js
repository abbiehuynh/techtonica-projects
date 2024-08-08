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
        let count = 0;
        // schedules the function to be executed repeatedly after a period of time
        let timerId = setInterval(function () {
            // creates ability to move down, create jump height limit
            if (count === 15) {
                // stops from continuously moving up when jump
                clearInterval(timerId);
                // creates new timer for moving down
                let downTimerId = setInterval(function() {
                    console.log("down");
                }, 20)
            }
                // override css position


            // creates ability to move up, incrementing the position of the cat
            position += 30;
            // increments count every 20 milliseconds
            count ++;
            // overrides position, multiplying by gravity to slow down jump 
            position = position * gravity;
            cat.style.bottom = position + "px";
        // 20 milliseconds
        }, 20);
    
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

