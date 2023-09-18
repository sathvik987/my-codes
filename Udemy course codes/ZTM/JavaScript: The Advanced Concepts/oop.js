class Animal {
    constructor(name, type, says) {
        this.name = name
        this.type = type;
        this.says = says;
    }
    run() {
        console.log(`${this.name} is running`);
    }
    say() {
        console.log(`${this.name} says ${this.says}`);
    }
}

class Cat extends Animal {
    constructor(name, type, says) {
        super(name, type, says)
    }
    purr() {
        console.log(`${this.name} is purring`);
    }
}

let tom = new Cat("Tom", "Cat", "Meow")
tom.purr()
tom.run()
tom.say()

let scooby = new Animal("Scooby", "Dog", "Bow Bow")
scooby.run()
scooby.say()

console.log(tom instanceof Cat);
console.log(tom instanceof Animal);