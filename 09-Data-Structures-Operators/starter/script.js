'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex: si = 1, //we can even set default values!! remember?? tHIS IS CRAZY
    mainIndex: mi = 0,
    time: t = '20:00',
    address: addy,
  }) {
    // look at the arguments of this function. Wrap it in curly braces to destructure the object we pass into it right away. Remember, order doesn't matter and we can take whatever properties we need from the object so we don't have to take the whole thing.
    console.log(
      `Order received! ${this.starterMenu[si]} and ${this.mainMenu[mi]} will be delivered to ${addy} at ${t}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  // ES6 enhanced object literals (We can write function properties like this too!)
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// set accepts an iterable
const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);
console.log(new Set('Jonas'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// we cannot index in a set. all values are unique, and there is no order. don't use a set if you care about the order.
// ordersSet.clear(); // delete everything in set
for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Libson, Portugal'));
rest
  .set('categories', ['Italian', 'Pizeria'])
  .set('open', 11)
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// cam also make a map from a list of lists which is easier than doing .set if we are initializing it.
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

// if we want to insert an object as a key to our map, we should create an instance of that object and then put it inside. This way, we use the ACTUAL array being referenced in the heap. The key needs to be the actual reference to the array obviously.
const arr = [1, 2];
question.set(arr, 'numbers');
console.log(question);
// Convert object to map (we can do it because object.entries returns us a list of lists.)
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// convert map to array
console.log([...question]);
//
console.log([...question.keys()]);
console.log([...question.values()]);

// Optional chaining: to check if something exists before calling it so that we don't get an error
// will return undefined if null/undefined, otherwise will return whatever is at open (even 0 or false works) checks first if restaurant.oepningHours exists, and if it does, if .mon exits too.
// console.log(restaurant.openingHours?.mon?.open);
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Use optional chaining with null coalescing
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(users[0]?.name ?? 'User array empty');

// // This is much better than:
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// const values = Object.values(restaurant.openingHours); // creates a list of values [[value]]
// console.log(values);
// const entries = Object.entries(restaurant.openingHours); // creates a list of lists [[key,value]]
// console.log(entries);
// for (const [index, [key, { open, close }]] of entries.entries()) {
//   console.log(
//     `${index + 1}. On ${key} we open at ${open} and close at ${close}`
//   );
// }

// // For of loop!!
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// // this is like an enumerate
// for (let [index, item] of menu.entries()) {
//   index += 1;
//   console.log(index + 1, item);
// }

// // we can create object property names using []
// const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri'];
// const openingHours = {
//   [weekdays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[1]]: {
//     open: 11,
//     close: 23,
//   },
//   [`${weekdays[4]}and${weekdays[3]}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// console.log(openingHours.friandthurs);

// // Destructuring Objects
// const { name, openingHours, categories } = restaurant; // here, we get the properties of the objects by calling their name and putting it in a variable with the same name. There is no order to this like destructuring lists.

// // To change the name of these properties, we have to do this:
// console.log(name, openingHours, categories);
// const {
//   name: restaurantName, // e.g. restaurantName is the new name of the variable for the name property
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // here we are setting default values AND renaming the variables
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// let x;
// let y;
// const obj = { a: 23, b: 7, c: 14 };
// { x, y } = obj; //we cannot do this because curly braces signigify a code block. WE can't put "let" or "const" in front of it because a and b have already been declared. So what do we do to reassign a and b to the new obj property a and b?

// //This is what we do:
// ({ a: a, b: b } = obj); //wrap inside parantheses
// // or just ({a, b} = obj)
// console.log(a, b);

// // nested objects (we want 2 variables, one called open and another called close)
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(fri);
// console.log(o, c);

// // Destructuring Lists
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // what if we want to swap main and secondary variables? Do it similar to python
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receiving 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 3, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // unpacking less values than the amount of variables we have
// const [p, q, r] = [8, 9]; // this will just set p=8, q=9, and r=undefined
// console.log(p, q, r);
// //we can set default values: If we have too little to unpack, it  will set it to default values
// // useful for apis where we don't know how much info we gonna get or if there's missing info
// const [a = 1, b = 1, c = 1] = [8, 9];
// console.log(a, b, c);

// //Spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // it will unpack all the elements of the array and putting it in newArr. It is liked adding two arrays in python, except we can place it wherever we want!
// const newArr = [1, ...arr, 2];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array does a shallow copy. It does not grab objects within objects. only primitives get copied.
// const mainMenuCopy = [...restaurant.mainMenu];
// mainMenuCopy.push('Martabak');
// console.log(restaurant.mainMenu, mainMenuCopy);

// // Spread operator works on any iterables!
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// // use spread to put in arguments to a function
// restaurant.orderPasta(...ingredients);

// // With ES 2018, spread operator also works on objects even though they aren't iterables
// // Objects
// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// // spread allows us to make a shallow copy and change primitive types. The objects within are still the same though unless we reassign them.
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'ristorante Roma';
// restaurantCopy.openingHours = { fri: 'nice try' };
// console.log(restaurantCopy.openingHours);
// console.log(restaurant.openingHours);

// // SPREAD, because on RIGHT side of =
// const arr2 = [1, 2, ...[3, 4]];

// // REST , because on LEFT side of =
// const [s, t, ...others] = [1, 2, 3, 4, 5];
// console.log(s, t, others);

// // does not include the skipped element in the list. REST will always take the last few elements/last element in the list. THus, there can only be one REST in any destructuring
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // REST in objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // REST in functions (packing arguments into an array called "numbers")
// // this is better than just passing an array, cause now the add function can accept both arrays and a sequence of values
// const add = function (...numbers) {
//   console.log(numbers);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// const arrx = [23, 4, 5];
// add(...arrx);

// //Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); // if first operand is truthy, then second operand will not be evaluated
// console.log('' || 'Jonas');
// consoloe.log(true || 0);
// console.log(undefined || null); //undefined is falsey value, but so is null, but since it is the last one, it will return null.

// restaurant.numGuests = 23;
// const guess1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10; //if numGuests exists, guests2 = 23. If not, we will get 10. This is better than if else or turnary.
// console.log(guests2);

// console.log(0 && 'Jonas'); //returns 0
// console.log(7 && 'Jonas'); //returns jonas
// conosle.log('Hello' && 23 && null && 'jonas'); // returns null

// // pratical example of short circuit
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// // if restaurant.orderPizza doesn't exist, then short circuit and do nothing. However, if it does exist, we can change the order
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // OR operator will return the first truthy value of all operands, or the last operand if all of them are falsey
// // AND operator will return the first falsey value or the last value if all of them are truthy

// //OR: set default values
// //AND: execute second operand if first one is true

// // restaurant.numGuests = 0;
// const guess = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish coalescing operator: null and undefined (NOT 0 or '') This works for 0 and ''.
// const guestCorrect = restaurant.numGuests ?? 10; // returns 10 if restaurant.numGuests is null or undefined

// console.log(guestCorrect);
