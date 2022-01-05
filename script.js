'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⚽' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);

  console.log(output);
}

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
                                          Strings          
================================================================================================ 
*/

/* 
********************************************
WORKING WITH STRINGS - PART 3
********************************************
*/

/* Strings: [split, join] */
// console.log('a+very+nice+string'.split('+'));
// console.log('Henrique Marques'.split(' '));

const [firstName, lastName] = 'Henrique Marques'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

function capitalizeName(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // 1) Slice
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // 2) Replace
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  // console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('luiz henrique garcia marques');

// Padding
const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));

// 1) Pratical Example
function maskCreditCard(number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
}

//  console.log(maskCreditCard(4344322211110092));

// Repeat
const message2 = 'Bad weather... All departures delayed...\n';
// console.log(message2.repeat(5));

function planesInLine(numOfPlanes) {
  // console.log(`There are ${numOfPlanes} planes in line.`);
}
// console.log(planesInLine(2));

/* 
********************************************
WORKING WITH STRINGS - PART 2
********************************************
*/
/*
const airline = 'TAP Air Butiá';
const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

const passenger = 'HeNrIqUe';

const nameToLowerCase = passenger.toLowerCase();
const nameCorrect = passenger[0].toUpperCase() + nameToLowerCase.slice(1);
// console.log(nameCorrect);

// Comparing email
const email = 'henrique@henrique.io';
const loginEmail = ' henrique@henriQUE.io \n';

const emailVerified = loginEmail.toLowerCase().trim();
const isEmailCorrect = email === emailVerified ? 'correct' : 'wrong';
// console.log(isEmailCorrect);

// Replacing - [replace, replaceAll, regex]
const priceUSD = '$288,97';
const priceBRL = priceUSD.replace('$', 'R$').replace(',', '.');
console.log(priceBRL);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans - [includes, startsWith, endsWith]
const planeTwo = 'Airbus  A320neo';
console.log(planeTwo.includes('A320')); // true
console.log(planeTwo.startsWith('AirA320')); // false
if (planeTwo.startsWith('Airbus') && planeTwo.endsWith('neo')) {
  console.log('Part of the new Airbus family.');
}

// Pratical exercise
function checkBaggage(items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

/* 
********************************************
WORKING WITH STRINGS - PART 1
********************************************
*/
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Butiá'));
// console.log(airline.indexOf('Butia')); // -1

/* ----- SLICE ----- */
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// B and E are middle seats
function checkMiddleSeat(seat) {
  // takes the last letter
  const seat1 = seat.slice(-1);
  if (seat1 === 'B' || seat1 === 'E') {
    // console.log('You got the middle seat');
  } else {
    // console.log('You got lucky');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

/* 
================================================================================================ 
                                          Sets              
================================================================================================ 
*/
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Risotto',
]);

//console.log(ordersSet);

//console.log(new Set('Henrique'));

//console.log(ordersSet.size);
//console.log(ordersSet.has('Pizza'));
//console.log(ordersSet.has('Bread'));

// Methods: has, add, delete, clear...

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();

//console.log(ordersSet);

for (const order of ordersSet) {
  //console.log(order);
}

// 1) Practical Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// Transforma o [Set] em array usando "SPREAD"
const staffUnique = [...new Set(staff)];
// console.log(new Set('HenriqueMarques').size);

/* 
================================================================================================ 
                                          Maps           
================================================================================================ 
*/
const restaurantMap = new Map();
restaurantMap.set('name', 'Classico Italiano');
restaurantMap.set(1, 'Firenze, Italy');
restaurantMap.set(2, 'Lisbon, Portugal');

// console.log(restaurantMap);

restaurantMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed :(');

// console.log(restaurantMap.get('open'));
// console.log(restaurantMap.get(true));

const currTime = 8;
/*console.log(
  restaurantMap.get(
    currTime > restaurantMap.get('open') &&
      currTime < restaurantMap.get('close')
  )
);*/

// console.log(restaurantMap.has('categories'));
// console.log(restaurantMap.delete(2));
// console.log(restaurantMap.size);
// restaurantMap.clear();
restaurantMap.set([1, 2], 'Test');

// console.log(restaurantMap);

const question = new Map([
  ['question', 'What is the best programming in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct answer.'],
  [false, 'Try it again.'],
]);
/* ============== Iteration with Maps ============= */

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz App
// console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    // console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer?'));
const answer = 3;
// Jonas solution
// console.log(question.get(question.get('correct') === answer));

// My solution
/*
if (answer === question.get('correct')) {
  console.log('You answered correctly');
} else {
  console.log('Try it again!');
}
*/

// Convert map to array1
//console.log([...question]);

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

//if (users.length > 0) console.log(users[0].name);
//else console.log('User array is empty');

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
  //console.log(`On ${day} we open at ${open} and close at ${close}`);
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
===============================================
Coding Challenge #1 
==============================================

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
================================================
Coding Challenge #2
================================================
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
  // console.log(`Goal ${goal + 1}: ${name}`);
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
//console.log(teamBayer, teamBor);

for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  //console.log(`Odd of ${teamStr}: ${odds}`);
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

/*  
====================================
Coding Challenge #3
====================================

Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:

1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK
*/
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

/* 
1. Create an array 'events' of the different game events that happened (no
duplicates)
*/
const events = [...new Set(gameEvents.values())];
// console.log(events);

/* 
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
*/

/* 
console.log(gameEvents.delete(64));
console.log(gameEvents); 
*/

/* 
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
*/
const time = [...gameEvents.keys()].pop();

/* 
console.log(`An event happened, on average every ${time / gameEvents.size} minutes`);
 */

/* 
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK
*/

for (const [min, event] of gameEvents) {
  const timerOfGame = min > 45 ? '[SECOND HALF]' : '[FIRST HALF]';
  // console.log(timerOfGame, min, event);
}

/* 
=============================
Coding Challenge #4
=============================
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
*/

const textarea = document.body.append(document.createElement('textarea'));
const button = document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  const textCamel = text.split('\n');

  for (const [i, row] of textCamel.entries()) {
    const [f, l] = row.toLowerCase().trim().split('_');
    const nameCorrected = f + l[0].toUpperCase() + l.slice(1);
    console.log(nameCorrected.padEnd(20) + '✅'.repeat(i + 1));
  }
});
