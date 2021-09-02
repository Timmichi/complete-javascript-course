'use strict';

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`); // will give us the name of the function
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('👋');
// };

// // high5 is a call back function that is called when we click (callback is just a function that is passed into another function as an argument)
// // addEventListener is our higher order function
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5); // for each, we will call the callback function.

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Jonas');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a set on ${this.airline} flight ${this.iataCode}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(235, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book; // example of first class function being assigned to another variable

// // book(23, 'Sarah Williams'); // this gives an error. this keyword points to undefined. It is a copy of the function. It is no longer a method. Just a function.

// book.call(eurowings, 23, 'Sarah Williams'); // functions are objects. objects have methods. functions can have methods. we call the call method which will call the book function with the "this" keyword set to eurowings.
// console.log(eurowings);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'MaryCooper');
// console.log(swiss);

// // Apply method (same as call() but accepts an array) Honestly kinda useless cause we can use the spread operator.
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);

// // Bind method permanently binds this keyword to a newly created booking function for each airline.
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23); // in our bookEW23, our first argument which is flightNum will be set to 23. Thus, we will only need the name.

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // this keyword is dependent on who CALLS the function. Since we are not calling the function when we pass it into the event listener, the event listener will call the function and the element (which is the object) itself, will become the this keyword

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // the "this" keyword is the button (.buy) element because in an event handler function, the this keyword points to the element which the handler is attached to.

// // we can use bind (which will return a new function and not call it) to fix our issue
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // we don't need "this" parameter so we can just set it to null
// // addVat = value => value + value * 0.23; // this is what's happening
// console.log(addVAT(100));
// console.log(addVAT(23));

// // we can do the same thing with returning a function
// const addTogether = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const calcVAT = addTogether(0.23);
// console.log(calcVAT(100));
// console.log(calcVAT(23));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `What is your favourite programming language?\n${this.options.join('\n')}`
    );
    !isNaN(answer) &&
    0 <= parseInt(answer) &&
    parseInt(answer) < this.answers.length
      ? this.answers[parseInt(answer)]++
      : console.log('Not a valid input. 1');
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type == 'string') {
      console.log(`Poll Results are ${this.answers.join(', ')}.`);
    } else {
      console.log('Not a valid input. 2');
    }
  },
};
const registerNewAnswer = poll.registerNewAnswer;
const register = registerNewAnswer.bind(poll);
document.querySelector('.poll').addEventListener('click', register);

const displayResults = poll.displayResults;
displayResults.call({ answers: [5, 2, 3] }, 'string'); // create a new object with a "answers" attribute. We don't do bind because we just want to quickly call the method on this array. This way, we don't have to create a new object and bind it to that.
displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// Immediately Invoked Function Expression (IIFE) if you only need to invoke a function once or create private variables. But you can also do that by creating a scope using curly braces (shown down below)
(function () {
  console.log('This will never run again;');
  const isPrivate = 23;
})();

// console.log(isPrivate) // not going to work since isPrivate is defined in a scope (it is private or encapsulated inside of the IIFE function scope)

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
  const hello = () => console.log('print hello');
  hello(); // this works too
}
// hello(); // not defined
// When we define things inside a scope (curly braces), they are scoped (and thus are not able to be accessed outside. Great for creating private variables. However, )
console.log(notPrivate);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const body = document.querySelector('body');
  body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
