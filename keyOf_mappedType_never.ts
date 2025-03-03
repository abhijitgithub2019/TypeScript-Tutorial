// optional parameter or property
// interface PersonOptional {
//     name: string,
//     age?: number
// }

// let Person_1: PersonOptional = {
//     name: "abhiji"
// }

// function addition(a: number, b: number, c?: number): number {
//       if(c!== undefined) {
//         return a+b+c;
//       }
//       return a+b;
// }

// console.log(addition(1,2));


// let name_1: never ="abhijit"

// function error(msg: string) : never {
//      throw new Error(msg)
// }

// error("messageError");

//keyOf operator

type PersonDetails = {
    name: string,
    age: number,
    EmployeeId: number
}

type PersonType = keyof PersonDetails; 
//  ~ => "name" | "age" | "EmployeeId"

// let p: PersonType = "car"

const PersonDetails_1 = {
    name: "abhi",
    age: 28,
    EmployeeId: 103032
}

type personDetailsType = keyof typeof PersonDetails_1;


// Object.keys(PersonDetails_1).forEach((key)=> {
//         console.log(PersonDetails_1[key as personDetailsType])
// });

// function getProperty<T, K extends keyof T>(obj: T, key: K) : T[K]{
//     return obj[key];
// }

// console.log(getProperty(PersonDetails_1, "location"));

// type cars = "BMW" |"TATA" | "Mahindra";

// type newType =  {
//     [c in cars] : {
//         name: c
//     }
// }

// interface userMappedType {
//     name: string,
//     age: number,
//     role: string
// }


// type partialType = {
//     [p in keyof userMappedType]? : userMappedType[p]
// }

// let person_11 : partialType = {
//     name: "abhi"
// }

// let person_12 : partialType = {
//     age: 10
// }