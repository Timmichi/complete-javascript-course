// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log('My name is Jonas');
// }

// //calling / running / invoking the function
// logger();
// logger();

// ways to create a function

// function declarations
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// function expression: this is an anonymous function that we set equal to calcAge2. Function is now calcAge2. Function expression. Functions are just values, like strings or numbers (but it's not a type). We can store it in variables.
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// With a function declaration, we can call the function BEFORE it is declared. But with a function expression, we CANNOT.

// Arrow function: great for 1 liner functions. we can only omit return if it is one line. Arrow functions do not get a "this" keyword.
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1991));

// const calcAverage = (s1, s2, s3) => (s1*s2*s3)/3;

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins > avgKoalas*2) console.log(`Dolphins Win!`);
//     else if (avgKoalas > avgDolphins*2) console.log(`Koalas Win!`);
//     else console.log("Nobody wins!");
// }

// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);
// checkWinner(scoreDolphins, scoreKoalas);

// // Two ways to create arrays:
// const numbers = [1,2,3,4];
// const numbers2 = new Array(1,2,3,4);
// console.log(numbers.length);
// numbers2[numbers.length-1] = 'jay';
// console.log(numbers2);

// // we can change arrays even though they are const.
// // only primitive values are immutable. Arrays are mutable because they are NOT a primitive value
// // numbers = ['Hello', 'fam'];
// // we cannot replace the entire array because we are reassigning a constant variable to a new array

// // Basic array operations (methods)

// const friends = ["Michael", "Steven", "Peter"];
// // This returns the new length of the array, which we can automatically assign to a variable
// const newLength = friends.push('Jay'); // adds to end of array and returns length of array
// console.log(newLength);
// friends.unshift('John'); // adds to front of array and returns length of array
// // pop() and shift() return the popped element INSTEAD of the length
// friends.pop(); // removes last element of array
// friends.shift(); //removes first element of array
// console.log(friends.indexOf('Steven')); // will give us the index of element

// // test for strict equality
// console.log(friends.includes('Steven')); //returns true
// console.log(friends.includes('Bob')); // returns false

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     ['Michael', 'Peter', 'Steven']
// ];

// // We have another data structure in JS called objects
// // each key is also called a property. Object has 5 properties.
// // Property 1 is firstname
// // Order of properties does NOT matter
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037-1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     calcAge: function(birthYear) {
//         return 2037 - birthYear;
//     }
// };

// // . operator will go to object and retrieve the property specified
// console.log(jonas.lastName);
// // in bracket notation, we can put any expression we'd like.
// // We can't do this in dot notation
// console.log(jonas['lastName']);
// // for example...
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastName, age, job, and friends');
// // This would give us "undefined" because jonas does not have a property called "interestedIn"
// console.log(jonas['interestedIn']);
// console.log(jonas[interestedIn]);

// //undefined is a falsey value
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// // this will create/update that property
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// we can create methods in our objects. A method is a function that is a property in our object
// const jonas= {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,
//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function() {
//     //     return 2037 - this.birthYear;
//     // }
//     // this creates a new property caleld age.
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
//     }
// };

// the object that is calling "calcAge" is "jonas", and thus inside the method calcAge(), the "this" keyword will be referring to the "jonas" object
// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas['calcAge'](jonas.birthYear));
// console.log(jonas['calcAge']());

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSummary());
// console.log(jonas);

// const mark = {
//     name: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height**2);
//         return this.BMI;
//     }
// }

// const john = {
//     name: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height**2);
//         return this.BMI;
//     }
// }

// john.calcBMI()
// mark.calcBMI()
// john.BMI > mark.BMI ? console.log(`${john.name}'s BMI (${john.BMI}) is higher than ${mark.name}'s (${mark.BMI})!`) : console.log(`${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s (${john.BMI})!`);

// for (let rep=1; rep <= 10; rep++) {
//     console.log(`Lifting weights repitition {rep}`);
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let tip;
for (let i = 0; i < bills.length; i++) {
  tip = calcTip(bills[i]);
  totals.push(bills[i] + tip);
  tips.push(tip);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(tips, totals);
console.log(calcAverage(tips));
