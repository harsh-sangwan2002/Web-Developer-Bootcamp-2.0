class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }
    meow() {
        return 'Meow';
    }
}

class Dog extends Cat {
    constructor(name, age) {
        super(name, age)
    }
    bark() {
        return 'Woof';
    }
}

const monty = new Cat('Monty', 9);
console.log(monty.eat());

const luna = new Dog('Luna', 3);
console.log(luna.eat());