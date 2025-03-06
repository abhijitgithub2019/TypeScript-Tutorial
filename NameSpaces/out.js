var PersonDetailsNameSpace;
(function (PersonDetailsNameSpace) {
    class Person {
        constructor(n) {
            this.name = n;
        }
    }
    PersonDetailsNameSpace.Person = Person;
})(PersonDetailsNameSpace || (PersonDetailsNameSpace = {}));
// let p = new PersonDetailsNameSpace.Person("abhi");
///<reference path ="namespace.ts"/>
let p = new PersonDetailsNameSpace.Person("abhi");
console.log(p);
