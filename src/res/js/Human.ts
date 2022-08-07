export class Human {
    constructor(
        public name: string,
        public age: number
    ) {}

    getName(): string {
        console.log('--> Мое имя', this.name);
        return this.name;
    }

    getAge(): number {
        console.log('--> Мой возраст', this.name);
        return this.age;
    }

    async getInfo(): Promise<any> {
        return { loading: true }
    }
}