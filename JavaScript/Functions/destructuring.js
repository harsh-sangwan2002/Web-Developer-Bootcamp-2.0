const scores = [10, 20, 30, 40, 50];
// Destructuring in Arrays
const [gold, silver, bronze] = scores;
console.log(gold, silver, bronze);

// Destructuring in Objects
const user = {
    email: 'harvey@gmail.com',
    password: 'password',
    firstName: 'Harvey',
    lastName: 'Specter'
};

const { firstName, lastName, email, password } = user;
console.log(firstName, lastName, email, password);