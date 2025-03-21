function sum(...nums) {
    console.log(typeof arguments);
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));