function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie());
console.log(rollDie(20));

function greet(msg = "Hey there!", person = "John Doe") {
    console.log(`${msg} ${person}`);
}
console.log(greet());
console.log(greet("Hello", "Jane Doe"));