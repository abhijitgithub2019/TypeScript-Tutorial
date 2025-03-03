// optional parameter or property
// interface PersonOptional {
//     name: string,
//     age?: number
// }
//  ~ => "name" | "age" | "EmployeeId"
// let p: PersonType = "car"
var PersonDetails_1 = {
    name: "abhi",
    age: 28,
    EmployeeId: 103032
};
// Object.keys(PersonDetails_1).forEach((key)=> {
//         console.log(PersonDetails_1[key as personDetailsType])
// });
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(PersonDetails_1, "name"));
