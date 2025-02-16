// Create a base class Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // A method that introduces the person
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create a Student class that extends Person
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);  // Call the constructor of Person
        this.grade = grade;
    }

    // A method to describe the student's grade
    study() {
        console.log(`${this.name} is studying and is in grade ${this.grade}.`);
    }
}

// Create a Teacher class that extends Person
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);  // Call the constructor of Person
        this.subject = subject;
    }

    // A method to describe the subject the teacher teaches
    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
