// create an event listener for when DOM is loaded, starts game
document.addEventListener("DOMContentLoaded", function() {
    // creates variables to access elements in html
    const cat = document.querySelector(".cat");
    const grid = document.querySelector(".grid");
    const alert = document.getElementById("alert");

    // creates variables for jump function
    let gravity = 0.9;
    //creates an isJumping boolean for jump function
    let isJumping = false;
    // creates isGameOver boolean
    let isGameOver = false;

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
    // creates event listener for if a key is pressed down, calls the control function
    document.addEventListener("keydown", control);

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
        // while game is not over, do all of this!
        if (!isGameOver) {
        // creates random spawn of obstacles
        let randomTime = Math.random() * 4000;
        // creates position for obstacle to override css postition
        let obstaclePosition = 2000;
        // creates variable and new div called obstacle
        const obstacle = document.createElement("div");
        // creates class name obstacle for new div created
        obstacle.classList.add("obstacle");
        grid.appendChild(obstacle);
        // overrides position of obstacle by moving it 1000px to the left
        obstacle.style.left = obstaclePosition + "px";

        let timerId = setInterval(function () {
            // set game over condition to be...
                //  obstacle has not passed cat
                //  if both the obstacle and cat are in the same position
                //  allows game to continue as long as cat jumps over obstacles
            if (obstaclePosition > 0 && obstaclePosition < 60 & position < 60) {
                // stops the timer or movement of obstacle when hits 0
                clearInterval(timerId);
                // creates alert for end of game - Game Over
                alert.innerHTML = "Game Over";
                // triggers the game over
                isGameOver = true;
                // removes all children from the grid (cat and obstacles)
                    // while cat(firstChild) is still present, remove obstacle(lastChild)
                while (grid.firstChild) {
                    grid.removeChild(grid.lastChild);
                }
            }
            
            obstaclePosition -= 10;
            obstacle.style.left = obstaclePosition + "px";
        }, 20);

        // generating multiple obstacles at random times within 4000 milliseconds
        setTimeout(generateObstacles, randomTime)
        }
    }
    generateObstacles();


    // create start game loading screen
        // add event listener, keydown, for start game
    
    // creates variable for score and score label
    let score = 0;
    let scoreLabel;

    // earn points per each obstacle cleared

    // create levels?
        // higher the level, the more obstacles
        // speed increases
        // call on generateObstacles()

    // reset game after game over
        // load play again screen


});
 
