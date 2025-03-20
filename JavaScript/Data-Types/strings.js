let username = "double quotes works";
username = 'single quotes works too';
console.log(username)

let animal = "Dumbo Octopus";
console.log(animal[0]);
console.log(animal[2]);
console.log(animal[6]);
console.log(animal[99]);

let firstName = "Steve", lastName = "Jobs";
let fullName = firstName + " " + lastName;
console.log(fullName);

// string methods
// 1. toUpperCase()
let msg = 'i am in lowercase';
console.log(msg.toUpperCase());

// 2. trim()
let greeting = '  leave me alone plz '
console.log(greeting.trim());

// 3. indexOf()
let sentence = 'I am a sentence';
console.log(sentence.indexOf('am'));
console.log(sentence.indexOf('I'));
console.log(sentence.indexOf('sentence'));

// 4. slice()
let word = 'JavaScript';
console.log(word.slice(0, 4));

// 5. replace()
let annoyingLaugh = 'tehee so funny! tehee!'
annoyingLaugh = annoyingLaugh.replace('tehee', 'haha');
console.log(annoyingLaugh);