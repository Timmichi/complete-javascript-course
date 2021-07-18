    'use strict';
// DOM: Document object model: Structured representation of HTML documents. Allows javascript to access HTML elemetns and styles to manipulate them
// Connection point between html documents and JavaScript code
// DOM is created by browser as soon as HTML page loads
// "document" is the special object that is the entry point to the DOM. This is why we call it in document.querySelector()


// DOM Methods and properties for DOM Manipulation e.g. document.querySelector() are not part of the JavaScript language. They are actual web APIs (libaries that browsers implement) that we can access using JavaScript. We don't have to import anything, it all happens behind the scenes.

// Other APIs like timers and fetch
// alt + "up/down arrow" lets us move lines up and down!

// document.querySelector('.message').textContent = "🎉 Correct Number!";  

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;


// get rid of duplicate code using DRY principle: Don't repeat yourself
// refactoring to change the code and make it cleaner, but don't change the functionality

// We need to use an event listener. WE can wait for a certain event to happen and react to it
// Event listener takes an Event handler as its second parameter
// This function will not be called. We must pass the function expression without calling it. It will be called when the event happens. It is the JavaScript engine that will call this function as soon as the event happens.
//Random gives us a number between 0 and 1. NOT INCLUDING 0 and 1.
// Math.trunc just removes the decimals. We can never get 20, since it will only be 19.99 at most. Our range is 0 - 19. To make it 1 - 20, we can add 1 to whatever number we get.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// always good to keep a variable to hold data in our code instead of relying on our DOM for our data. This is also caled a "state variable" because it keeps track of the state of our application.
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        // Just the element name. No dot. Dot is for classes. For property names that have multiple words, we don't use the dash ("-") like in CSS, but we use camel case.
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem"; 
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!': '📉 Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            score--;
            document.querySelector('.score').textContent = score;            
        }
    } 
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20; 
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem"; 

})









