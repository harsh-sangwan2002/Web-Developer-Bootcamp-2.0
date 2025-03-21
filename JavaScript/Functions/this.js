const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    fullNameWithArrow: () => {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullName())
console.log(person.fullNameWithArrow())