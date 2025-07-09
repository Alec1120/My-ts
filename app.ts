var message: string = "Hello, World!";
console.log(message);


// 1. Declarations
let name1: string = "Alice";
let age1: number = 30;

// interface Person {
//     name: string;
//     age: number;
// }

// 2. Variable Declaration
const pi : number = 3.14;

// 3. Function Declaration
function greet(name: string): string {
    return `Hello, ${name}`;
}

const greet2 = (name: string): string => "Hello, " + name;


// 4. Class Declaration
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// 5. interface and type alias
interface Animal {
    name: string;
    sound: string;
}
type Vehicle = {
    make: string;
    model: string;
    year: number;
};

type ID = string | number;

// 6. Modules and Imports/Exports
export class Person2 {
    constructor(public name: string) {}
}
// import { Person } from './Person';

// 7. Type Assertions
let value: any = "hello";
let strLength: number = (value as string).length;

// 8. Generics
function identity<T> (arg: T): T {
    return arg;
}

// 9. Type Inference
let num = 10;

// 10. Type Guards
function isString(value: any): value is string {
    return typeof value === 'string';
}

// 11. Asynchronous Programming
async function fetchData(): Promise<string> {
    const response = await fetch('https://example.com');
    const data = await response.text();
    return data;
}

// 12. Error Handling
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
}
