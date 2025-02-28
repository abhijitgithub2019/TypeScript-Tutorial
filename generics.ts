//<T>

// function printName<T>(arg : T) : T {
//     return arg;
// }

// const printName1 = <T>(arg: T): T=> {
//     return arg;
// }
// console.log(printName1<string>("abh"));
// console.log(printName<string>("abhi"));


// interface Person<T> {
//     EmployeeId : T
// }

// let p : Person<string| number> =  {
//     EmployeeId: "1000210"
// }

// console.log(p.EmployeeId);


// type Person<T> =  {
//     EmployeeId : number,
//     name: string,
//     addrerss: T
// }

// type address = {
//     pincode: number,
//     location: string
// }

// let p1: Person<address> = {
//     EmployeeId: 102020,
//     name : "abhi",
//     addrerss: {
//         pincode: 1020222,
//         location: "Kolkata"
//     }
// }
// console.log(p1.addrerss.location)


// class PrintNames<T> {
//     private names: T[] = [];
//     // constructor(name: T) {
//     //     // this.names.push(name);
//     // }
//     setName(name: T) {
//         this.names.push(name)
//     }
//    getNames(): T[] {
//      return this.names;
//    }
// }

// let name_1 = new PrintNames<string>();
// name_1.setName("a");
// name_1.setName("b");
// console.log(name_1.getNames());


// function PrintName<T extends {name: string, age: number}>(arg: T) :  number {
//     return arg.age;
// }

// // console.log(PrintName(123456))
// console.log(PrintName({age: 20, name: "aaa"}));

interface Person {
    EmployeeId: number,
    name : string
}

type checkPersonType<T> =  T extends Person ? Person: never;

const person_1 : checkPersonType<Person> = {
    EmployeeId: 1000020, name: "abhijit"
}

const person_2 : checkPersonType<string> = {
    name: "abhijit"
}