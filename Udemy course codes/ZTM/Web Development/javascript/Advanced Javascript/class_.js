class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    intro() {
        console.log(`Hey i am ${this.name} and i am ${this.type} type.`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`${this.type} type player is playing.`);
    }
}

const jhon = new Wizard('Jhon', 'Healer');
const smith = new Wizard('Smith', 'Dark magic');

jhon.play();
smith.intro();

console.log(jhon.type);