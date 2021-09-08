// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">
//       ${i + 1} ${type}</div>
//       <div class="movements__value">${mov}</div>
//     </div>
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
// displayMovements(account1.movements);
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('------- FOREACH -------');
// movements.forEach(function (movement, i, array) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // For sets, there are no keys (you can't index, so it is the same value as value). We can use the convention "_" to mean a "throwaway" variable
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// /*
// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// GOOD LUCK 😀
// */

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = age_lst =>
//   age_lst.reduce((acc, curr) => acc + curr, 0) / age_lst.length;

// console.log(calcAverageHumanAge(data1));
// console.log(calcAverageHumanAge(data2));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/

// Part 1
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
dogs.forEach(obj => (obj.recommendedFood = obj.weight ** 0.75 * 28));

// Part 2
const checkIntake = function (dogObj) {
  return dogObj.curFood > dogObj.recommendedFood ? 'much' : 'little';
};
const sarahDog = dogs.find(obj => obj.owners.includes('Sarah'));
console.log(`Sarah's dog is eating too ${checkIntake(sarahDog)}`);

// Part 3
const ownersEatTooMuch = dogs
  .filter(obj => obj.curFood > obj.recommendedFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(obj => obj.recommendedFood > obj.curFood)
  .flatMap(dog => dog.owners);

// Part 4
console.log(
  ownersEatTooMuch
    .reduce((prev, curr) => `${prev} and ${curr}`)
    .concat(`'s dogs eat too much!`)
);

console.log(
  ownersEatTooLittle
    .reduce((prev, curr) => `${prev} and ${curr}`)
    .concat(`'s dogs eat too little!`)
);

// Part 5
console.log(dogs.some(dog => dog.currFood === dog.recommendedFood));

// Part 6
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// Part 7
const okayAmountDogs = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

console.log(okayAmountDogs);

// Part 8
const newDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(newDogs);
