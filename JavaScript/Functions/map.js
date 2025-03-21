const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = numbers.map(num => num * 2);

console.log(numbers);
console.log(newArr);

const movies = [
    { title: 'Amadeus', score: 99 },
    { title: 'Stand By Me', score: 85 },
    { title: 'Parasite', score: 95 },
]

const titles = movies.map(movie => movie.title);
console.log(titles);