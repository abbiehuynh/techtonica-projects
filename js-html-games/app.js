// create an event listener for when DOM is loaded, starts game
document.addEventListener("DOMContentLoaded", function() {
    // creates variables to access elements in html
    const cat = document.querySelector(".cat");
    const grid = document.querySelector(".grid");
    const alert = document.getElementById("alert");

    // creates variables for jump function
    let gravity = 0.9;
    //creates an isJumping boolean
    let isJumping = false;

    // control function, pressing space bar triggers jump function
    function control(e) {
        // creates connection to space bar to jump
        if (e.code === "Space") {
            // creates condition to prevent user from jumping while jumping (prevents double jumping)
            if (!isJumping) {
                jump(); 
            }
        }
    }

    // creates variable to override position of cat in css
    let position = 0;

    // jump function 
    function jump() {
        // creates isJumping to be happening
        isJumping = true;
        let count = 0;
        // schedules the function to be executed repeatedly after a period of time
        let timerId = setInterval(function () {
            // creates ability to move down, create jump height limit
            if (count === 15) {
                // stops from continuously moving up when jump
                clearInterval(timerId);
                // creates new timer for moving down
                let downTimerId = setInterval(function() {
                    // sets condition for when jumping is over
                    if (count === 0) {
                        // stops the jumping movement by clearing the time interval for moving down
                        clearInterval(downTimerId);
                        // jumping is no longer happening
                        isJumping = false;
                    }
                    // override css position to visually show down movement of cat
                    position -= 5;
                    count--;
                    position = position * gravity;
                    cat.style.bottom = position + "px";
        
                }, 20)
            }

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
    function generateObstacles() {
        // creates variable and new div called obstacle
        const obstacle = document.createElement("div");
        // creates class name obstacle for new div created
        obstacle.classList.add("obstacle");
        grid.appendChild(obstacle);
    }
    generateObstacles();
        // while game is not game over, generate obstacles
        // randomize generating
        // override css position 

        // removing obstacles when game is over


    // alerting when game is over


    // creates event listener for if a key is pressed down, calls the control function
    document.addEventListener("keydown", control);
})

