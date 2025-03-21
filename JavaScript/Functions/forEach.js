const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(num => console.log(num));
numbers.forEach(num => console.log(num * 2));
numbers.forEach(num => {
    if (num % 2 == 0)
        console.log(num);
})

const movies = [
    { title: 'Amadeus', score: 99 },
    { title: 'Stand By Me', score: 85 },
    { title: 'Parasite', score: 95 },
]

movies.forEach(movie => console.log(`${movie.title} - ${movie.score}`));