// let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');
// console.log(40 + 8 + 23 - 10);


// BMI = (mass/height)**2
// let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markHeigherBMI;
// const markMass = 95;
// const johnMass = 85;
// const markHeight = 1.88;
// const johnHeight = 1.76;
// const markBMI = markMass/(markHeight **2);
// const johnBMI = johnMass/(johnHeight **2);
// const markHeigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHeigherBMI);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2021;

// const jonas = "I'm " + firstName + ", a " + (year-birthYear) + " year old " + job + "!";
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
// console.log(jonasNew);
// // You can write strings as template literals as well. e.g. 
// console.log(`Hello, this is a template line string 😊`);
// console.log('String with \n\
// multiple \n\
// lines');
// // template literal will automatically do it for you without \n
// console.log(`String with
// multiple
// lines`);


// // Called "Type conversion instead of Type casting" in JavaScript
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);
// // This will give us NaN meaning "Not a number"
// console.log(Number('Jonas'));
// // JavaScript will do "type coercision" when it changes strings to numbers automatically.

// 5 falsy values: 0, '', undefined, null, NaN
// '18' == 18 // will return true because double equal means JS will do type coersion (loose equality)
// '18' === 18 // will return false because triple equal checks for true equality
// 18 === 18 // will return true

// const favorite = Number(prompt("What's your favorite number?"));
// if (favorite === 23) {
//     console.log("Cool! 23 is an amazing number!");
// } else if (favorite == 17) {
//     console.log("7 is also a cool number.");
// } else {
//     console.log("Number is not 23 or 7");
// }

// const avgDolphinScore = (200+112+80)/3;
// const avgKoalaScore = (109+95+50)/3;
// console.log(avgDolphinScore, avgKoalaScore);
// const minScore = 100;
// if (avgDolphinScore > avgKoalaScore && avgDolphinScore >= minScore) {
//     console.log('The winners are the dolphins! 🏆');
// } else if (avgKoalaScore > avgDolphinScore && avgKoalaScore >= minScore) {
//     console.log('The winners are the koalas! 🏆');
// } else if (avgKoalaScore === avgDolphinScore && avgDolphinScore >= minScore && avgKoalaScore >= minScore) {
//     console.log('Tie! Both win! 🏆');
// } else {
//     console.log('No team wins!');
// }

// const day = 'wednesday';
// switch(day) {
//     case 'monday':
//         console.log('Plan course struture');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// // The conditional ternary operator
// const age = 23;
// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);
// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);

// const billValue = 10;
// const tip = 50 <= billValue && billValue <= 300 ? billValue*(.15) : billValue*(.20);
// console.log(`The bill was ${billValue}, \
// the tip was ${tip}, and the total value was ${tip + billValue}`);

