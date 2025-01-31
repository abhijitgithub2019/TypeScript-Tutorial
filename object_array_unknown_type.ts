interface user {
    name: string;
    age: number,
    address: string
}

let person1 : user = {
    name : "abhi",
    age: 20,
    address: "Mumbai"
}

let obj1: {name: string, age: number} = {
    name: "abhi", age: 24
}


let obj: {} ={};

let arr : string[] =["abhi"];
// arr.push(20)

let arr1: number[] =[10, 20];
// arr1.push("name")

function printName(id: number): void {
   // return "abhi"
}

const printName2 = (id: number): string => "abhi"
console.log(printName2(1));

// AnyType Vs unknown Type

let a: any = 10;
let u: unknown = 10;

a.length;
// u.length
let a1: string = a;
let u1: string = u;






