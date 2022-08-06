export class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        console.log('--> Мое имя', this.name);
        return this.name;
    }

    getAge() {
        console.log('--> Мой возраст', this.name);
        return this.age;
    }
}