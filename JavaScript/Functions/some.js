const scores = [80, 98, 100, 90, 78, 77, 76, 70];
const every = scores.every(score => score > 70);
const some = scores.some(score => score > 70);

console.log(every);
console.log(some);