var person1 = {
    name: "abhi",
    age: 20,
    address: "Mumbai"
};
var obj1 = {
    name: "abhi", age: 24
};
var obj = {};
var arr = ["abhi"];
// arr.push(20)
var arr1 = [10, 20];
// arr1.push("name")
function printName(id) {
    // return "abhi"
}
var printName2 = function (id) { return "abhi"; };
console.log(printName2(1));
// AnyType Vs unknown Type
var a = 10;
var u = 10;
a.length;
// u.length
var a1 = a;
// let u1: string = u;
u = "string";
console.log(u);
