const movieLine = ["tom", "nancy"];

// push
movieLine.push("jerry");
console.log(movieLine);

// pop
console.log(movieLine.pop());
console.log(movieLine)

// unshift
movieLine.unshift("jerry");
console.log(movieLine);

// shift
console.log(movieLine.shift());
console.log(movieLine)

// concat
const cats = ['blue', 'kitty'], dogs = ['rusty', 'wyatt'];
console.log(cats.concat(dogs));

// includes
console.log(cats.includes('blue'));
console.log(cats.includes('kitty'));

// indexOf
console.log(cats.indexOf('white'));
console.log(cats.indexOf('kitty'));

// reverse
console.log(cats.reverse());
console.log(cats);

// slice
let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'black', 'white', 'indigo', 'violet'];
console.log(colors.slice(2, 5));

// splice
console.log(colors.splice(2, 5));
console.log(colors);

// sort
let scores = [1, 10, 21, 2];
console.log(scores.sort());

// Multi-dimensional arrays
let board = [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]];
console.log(board[0][0]); // X
console.log(board[1][2]); // O