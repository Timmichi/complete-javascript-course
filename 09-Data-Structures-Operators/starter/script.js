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
};

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Destructuring Objects
const { name, openingHours, categories } = restaurant; // here, we get the properties of the objects by calling their name and putting it in a variable with the same name. There is no order to this like destructuring lists.

// To change the name of these properties, we have to do this:
console.log(name, openingHours, categories);
const {
  name: restaurantName, // e.g. restaurantName is the new name of the variable for the name property
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// here we are setting default values AND renaming the variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
let x;
let y;
const obj = { a: 23, b: 7, c: 14 };
// { x, y } = obj; //we cannot do this because curly braces signigify a code block. WE can't put "let" or "const" in front of it because a and b have already been declared. So what do we do to reassign a and b to the new obj property a and b?

//This is what we do:
({ a: a, b: b } = obj); //wrap inside parantheses
// or just ({a, b} = obj)
console.log(a, b);

// nested objects (we want 2 variables, one called open and another called close)
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(fri);
console.log(o, c);

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
