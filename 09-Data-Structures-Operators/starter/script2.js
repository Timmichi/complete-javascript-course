// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }

// let average = 0;
// const odds = Object.values(game.odds);
// for (let odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(`Average odd: ${average} `);

// const odds2 = Object.entries(game.odds);
// console.log(odds2);
// for (const [key, value] of odds2) {
//   const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
//   console.log(`Odds of ${teamStr}: ${value}`);
//   // const teamName = game[key] ?? console.log(`Odds of draw: ${value}  `);
//   // teamName && console.log(`Odds of victory ${teamName}: ${value}`);
// }

// const scorers = {};
// for (const scorer of game.scored) {
//   // scorers[scorer] ?? (scorers[scorer] = 0);
//   // scorers[scorer] += 1;
//   scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
// }

// console.log(scorers);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// // const [players1, players2] = game.players;
// const {
//   players: [players1, players2],
// } = game;
// console.log(players1, players2);
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log(`Number of goals scored: ${players.length}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
// console.log();

// team1 < team2 && console.log('Team1 is more likely to win');
// team2 < team1 && console.log('Team2 is more likely to win');

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// let events = [...new Set([...gameEvents.values()])];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happend, on average, every ${90 / gameEvents.size} minutes`
// );

// for (const [minutes, event] of gameEvents.entries()) {
//   const half = minutes > 45 ? 'SECOND' : 'FIRST';
//   console.log(`[${half} HALF] ${minutes}: ${event}`);
// }

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.length);

console.log(airline.indexOf('r')); // gives us the first occurence of 'r'
console.log(airline.lastIndexOf('r')); // gives us the last occurence of 'r'
console.log(airline.indexOf('Portugal')); // gives us where first occurence of 'Portugal' starts
console.log(airline.indexOf('portugal')); // returns -1 because it doesn't exist
console.log(airline.slice(4)); // returns a NEW string starting at index 4. (since strings are immutable)
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); // will give us the first word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // will give us the last word

console.log('test', airline.slice(-2)); // from -2, grabs us everything up to end of string
console.log(airline.slice(1, -1));

// although strings are primitive and shouldn't have methods/attributes like objects, behind the scenes, JavaScript makes the string an object when we call methods like .slice() on it.
console.log(new String('jonas')); // like this...
console.log(typeof new String('jonas')); // this will return "object"
console.log(typeof new String('Jonas').slice(1)); // all string methods return primitives so this will return "string"

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS'; // should look like 'Jonas'
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // will trim spaces and new lines.
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceUS = '288.974$';
const pricePercent = priceUS.replace('$', '%').replace(',', '.'); // will replace first occurence
console.log(pricePercent);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement).replace('door', 'gate'); // only replaces first occurence
console.log(announcement.replace(/door/g, 'gate')); //regex (gets all occurences just like replaceAll)

// Booleans
const plane2 = 'A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('neo'));
console.log(plane2.endsWith('neo'));

// split and join
console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName);

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // will pad message at start with '+' until it is 25 characters long
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// masking using padding and slicing
const maskCreditCard = function (number) {
  const str = number + ''; // trick to make the number a string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));

// repeat or multiply a string
const message1 = 'hello';
console.log(message1.repeat(10));
