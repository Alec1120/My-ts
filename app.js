var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var message = "Hello, World!";
console.log(message);
// 1. Declarations
let name1 = "Alice";
let age1 = 30;
// interface Person {
//     name: string;
//     age: number;
// }
// 2. Variable Declaration
const pi = 3.14;
// 3. Function Declaration
function greet(name) {
    return `Hello, ${name}`;
}
const greet2 = (name) => "Hello, " + name;
// 4. Class Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
// 6. Modules and Imports/Exports
export class Person2 {
    constructor(name) {
        this.name = name;
    }
}
// import { Person } from './Person';
// 7. Type Assertions
let value = "hello";
let strLength = value.length;
// 8. Generics
function identity(arg) {
    return arg;
}
// 9. Type Inference
let num = 10;
// 10. Type Guards
function isString(value) {
    return typeof value === 'string';
}
// 11. Asynchronous Programming
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://example.com');
        const data = yield response.text();
        return data;
    });
}
// 12. Error Handling
try {
    throw new Error("Something went wrong");
}
catch (error) {
    console.error(error.message);
}
