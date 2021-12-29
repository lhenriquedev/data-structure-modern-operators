'use strict';

// Data needed for a later exercise
const flights = '';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6: Enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

/* 
================================================================================================ 
                                      Optinal Chaining
================================================================================================ 
*/

// ========= With Optional Chaining ======== //
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`On ${day}, we open at ${open}`);
}

// ========= Methods: With Optional Chaining ======== //
//console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');

if (restaurant.openingHours.mon) {
  // console.log(restaurant.openingHours.mon.open);
}

// ========= Array: With Optional Chaining ======== //
const users = [{ name: 'Henrique', email: 'hello@henrique.io' }];
//console.log(users[0]?.name ?? 'User array is empty!');

if (users.length > 0) console.log(users[0].name);
else console.log('User array is empty');

// ========= With Optional Chaining ======== //
//console.log(restaurant.openingHours.mon?.open);
//console.log(restaurant.openingHours?.mon?.open);

/* 
================================================================================================ 
                                      The for-of loop
================================================================================================ 
*/
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  // console.log(item);
}

for (const [index, item] of menu.entries()) {
  // console.log(`${index + 1}: ${item}`);
}

/* 
================================================================================================ 
                                    OBJECT: keys, value and entries
================================================================================================ 
*/
// Properties Names
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

// Properties Values
const values = Object.values(openingHours);
// console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/* 
================================================================================================ 
                                      Enhanced Object                 
================================================================================================ 
*/

/*  
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
 */
// ====== OR assignment operator ======

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// ======== if numGuests = 10, then the value will be 10 ===========

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// ======== How to solve this: Nullish assignment operator =======

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// ========= Short Circuting AND assignment ==========

// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

/*
// ======= Nullish: null and undefined (NOT 0 or '') ====================================
restaurant.numGuests = 23;
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
*/

/*
================================================================================================ 
                                      Short Circuiting                
================================================================================================ 
console.log('===== OR =====');
// Use any data type, return ANY data type, short-circuiting
console.log(3 || '');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('===== AND =====');
console.log(0 && 'Jonas');
console.log(7 && 'Henrique');

console.log('Hello' && 23 && null && 'henrique');

// Practical example
if (restaurant.orderPizza) restaurant.orderPizza('mushrooms', 'cebola');

// Retorna o primeiro valor falsy, se não ele vai retornar o último valor verdadeiro/truthy
restaurant.orderPizza && restaurant.orderPizza('mush', 'onion');
*/

/* 
================================================================================================ 
                                      Destructuring      
================================================================================================ 
*/
/*
// REST, because on left side of =
const [r, t, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(r, t, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Function ======================================
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'cebola', 'calabreza', 'chocolate  ');
restaurant.orderPizza('mushrooms');
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, ...arr];

// const newArr = [1, 2, ...arr];
// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Batata Frita'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Merge / Join 2 arrays
// const menuJoining = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuJoining);

// Itarables: arrays, strings, maps, sets. NOT objects
// const str = 'Henrique';
// const letters = [...str, ' ', 'Pica'];
// console.log(letters);
// console.log(`${...str} Pica`);

// Real-world examples
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// Multiples params to a  function
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { founding: 1992, ...restaurant, founder: 'Hui Barb' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Pizza dos guri seboso';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,  21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole,  21',
  starterIndex: 1,
});

// =================== Destructuring objects ===================== //
const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurant, hours, tags);

// Default values in destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables in destructuring
let a = 111;
let b = 99;
const obj = { a: 23, b: 31, c: 14 };

({ a, b } = obj);

// Nested objects in destructuring
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);


// Destructuring Arrays
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i,, j] = nested;
// console.log(i, j)
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/

/*
============= Coding Challenge #1 =======================
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK �
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [player1, player2] = game.players;

/* 2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players */
const [gk, ...fieldplayers] = player1;
// const [gk, ...fieldplayers] = player2;
// console.log(gk, fieldPlayers);

/* 3. Create an array 'allPlayers' containing all players of both teams (22 players) */
const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

/* 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic' */
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
/* console.log(players1Final); */

/* 5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2') */
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

/*  6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in) */

function printGoals(...nameOfPlayers) {
  const countOfGoals = {};
  for (const element of nameOfPlayers) {
    countOfGoals[element]
      ? (countOfGoals[element] += 1)
      : (countOfGoals[element] = 1);
  }
  return countOfGoals;
}

const count = printGoals(...game.scored);
// console.log(count);

/* 7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator. */

// team1 > game.odds.team2 && console.log('Team two is more likely to win');
// team1 < game.odds.team2 && console.log('Team one is more likely to win');

/* 
=========================
Coding Challenge #2
=========================
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

/* 
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
*/

const goals = game.scored.entries();
for (const [goal, name] of goals) {
  console.log(`Goal ${goal + 1}: ${name}`);
}

/* 
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
*/
const odds = Object.values(game.odds);

let average = 0;
for (const values of odds) {
  average += values;
}
// console.log(average / odds.length);

/* 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 
*/

const [teamBayer, teamBor] = Object.values(game);
console.log(teamBayer, teamBor);

for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odds}`);
}

/* 
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

const scorers = {};
for (const element of Object.values(game.scored)) {
  scorers[element] ? (scorers[element] += 1) : (scorers[element] = 1);
}

console.log(scorers);
