const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Spread syntax
const maxNum = Math.max(...numbers);
console.log(maxNum);

// Spread in arrays
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt', 'Olly'];
const allPets = [...cats, ...dogs];
console.log(allPets);

// Spread in objects
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };
const catDog = { ...feline, ...canine };
console.log(catDog);