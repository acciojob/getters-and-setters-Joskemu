// Person Class
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }

    // Getter for age
    get age() {
        return this._age;
    }
}

// Student Class
class Student extends Person {
    constructor(name, age) {
        super(name, age);  // Inherit from Person class
    }

    // Method to simulate studying
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Teacher Class
class Teacher extends Person {
    constructor(name, age) {
        super(name, age);  // Inherit from Person class
    }

    // Method to simulate teaching
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Example usage

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching
