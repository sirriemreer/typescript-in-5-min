class Student{
    /*
    The use of public on arguments to the constructor is a shorthand that
    allows us to automatically create properties with that name.
    */
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
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

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);