const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 == 0);

console.log(evenNumbers);

const movies = [
    { title: 'Amadeus', score: 99, year: 1984 },
    { title: 'Stand By Me', score: 85, year: 1986 },
    { title: 'Parasite', score: 95, year: 2019 },
    { title: 'Alien', score: 90, year: 1979 },
    { title: 'Inception', score: 85, year: 2010 },
]
const goodMovies = movies.filter(movie => movie.score >= 90);

console.log(goodMovies);