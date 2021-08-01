'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // var allows us to transcend the block scope. It is now just a function variable inside of the printAge() function. We should not use var. This is old code before ES6.
//       //   var millenial = true;
//       // this will just create a new variable with the same name, and in here, we will use Stveven instead of Jonas.
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       // Here we manipulated the original output variable.
//       output = 'New Output!';
//     }
//     // console.log(str);
//     // console.log(millenial);
//     // add() won't be defined since it is in the block scope.
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();

//HOISTING with Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;

//with Functions

// console.log(addDec1(2, 3));
// console.log(addExpr);
// console.log(addArrow);
// // console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// // function declaration is the only one we can use before declaring it, is this one.
// function addDec1(a, b) {
//   return a + b;
// }
// // this will hoist the var addExpr up but it will be initialized to undefined
// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();
// // Why does this delete everything? It's because numProducts is a var and it gets hoisted to the top as "undefined". Undefined is a falsey value, and thus it will execute the deleteShoppingCart() function.
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// // Window is the global object of JavaSript in the browser.
// // it contains functions like "alert" that we ahve used before.

// this will point to the global object regardless of strict mode
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // strict mode makes this undefined, rather tahn pointing to the global object like the first console.log(this)
//   console.log(this);
// };
// calcAge(1991);
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // arrow function will not get its own this keyword. It will therfore use its lexical this keyword. It uses the this keyword of its parent scope. Since the parent scope's this keyword is the global object (window), it will be the window object.
//   console.log(this);
// };
// calcAgeArrow(1980);

// // btw, const makes the variable itself immutable, not its assigned content. When the content is an object, this means the object itself can still be altered. But we can't reassign jonas or matilda to a new object.
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     this.age = 2037 - this.year;
//     console.log(this.age);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2007,
// };

// matilda.calcAge = jonas.calcAge;
// // This will call the calcAge function which will compute the age of matilda since the this keyword will point to matilda object since it points to the object taht called the function.
// matilda.calcAge();

// Arrow function does not get its own this keyword.
// It uses the parent's this keyword. The parent scope in this case is the global scope.zz

var firstName = 'Matilda';
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    this.age = 2037 - this.year;
    console.log(this.age);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1961);
    };
    isMillenial();
  },
  // if var firstName is declared in the global scope, it will make firstName = 'Matildaa' and this is bad because it is called on this (which refers to the global object window)
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

// An object does not have its own scope. It is not a code block. It is just an object literal. It is how we define an object. If it is defined in the global scope, it is part of that global scope.
