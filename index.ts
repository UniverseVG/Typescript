//basics
// let user = { name: "John", age: 30 };
// console.log(user.name);
// console.log(user.age);

// let greeting: string = "Hello";
// console.log(greeting);

// export {};

// // const heroes = [1, 2, 3, 4];
// const heroes = ["thor", "spiderman", "ironman"];
// heroes.map((hero) => console.log(hero));

// type aliases and readonly
// type account = {
//   readonly _id: 1234;
//   name: "John";
//   age: 30;
// };

//Tuples

// type arr = [string, number, boolean];

// const arr: arr = ["hello", 123, true];

// // let [a, ...b] = arr;

// let [, b] = arr;

// console.log(arr.push("ty"), arr);

// //classes, public and private
// class Person {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public getInfo(): string {
//     return `This person's name is ${this.name} and they are ${this.age} years old.`;
//   }
// }

// const person = new Person("John", 30);
// console.log(person.getInfo());

// Generics

// function getProducts<T>(products: Array<T>): T {
//   return products[3];
// }

// getProducts<string>([]);

// const getItems = <T>(products: T): T => {
//   return products;
// };

// interface Items {
//   name?: string;
//   price?: number;
// }
// getItems<Items>({});

// Type Predicates

// interface Luffy {
//   name: string;
//   stretch: () => void;
// }

// interface Zoro {
//   name: string;
//   swordsman: () => void;
// }

// function IsLuffy(arg: Luffy | Zoro): arg is Luffy {
//   return (arg as Luffy).stretch !== undefined;
// }

// function getCharacter(arg: Luffy | Zoro) {
//   if (IsLuffy(arg)) {
//     arg;
//     return "Is Luffy";
//   } else {
//     arg;
//     return "Is Zoro";
//   }
// }
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

// Discriminated union type
type Shape = Circle | Square | Rectangle;

// Function to calculate area using discriminated unions
function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      // Exhaustiveness checking: ensures all cases are handled
      // This line should never be reached if all cases are covered
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// Example usage
const myCircle: Circle = { kind: "circle", radius: 5 };
const mySquare: Square = { kind: "square", sideLength: 4 };
const myRectangle: Rectangle = { kind: "rectangle", width: 6, height: 3 };

console.log(calculateArea(myCircle)); // Output: 78.53981633974483
console.log(calculateArea(mySquare)); // Output: 16
console.log(calculateArea(myRectangle)); // Output: 18
