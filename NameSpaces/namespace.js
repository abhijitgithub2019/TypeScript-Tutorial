var PersonDetailsNameSpace;
(function (PersonDetailsNameSpace) {
    //    export class Person {
    //         private name;
    //         constructor(n: string) {
    //             this.name = n;
    //         }
    //     }
    function add(a, b) {
        return a + b;
    }
    PersonDetailsNameSpace.add = add;
})(PersonDetailsNameSpace || (PersonDetailsNameSpace = {}));
// let p = new PersonDetailsNameSpace.Person("abhi");
