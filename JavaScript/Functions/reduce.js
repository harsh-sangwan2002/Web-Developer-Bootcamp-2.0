const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
const totalPrice = prices.reduce((acc, ele) => acc + ele, 0);

console.log(totalPrice);