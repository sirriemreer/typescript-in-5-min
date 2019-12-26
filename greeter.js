var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// let user = "Jane User";
// let user = [0, 1, 2];
/*
In TypeScript, two types are compatible if their internal structure is compatible.
This allows us to implement an interface just by having the shape the interface
requires, without an explicit implements clause.
*/
//let user = {firstname: "John", lastName: "Stockton" }; 
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
