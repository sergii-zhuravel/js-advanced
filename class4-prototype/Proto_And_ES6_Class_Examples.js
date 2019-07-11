function Person(name) {
    this.name = name;
}


Person.prototype.sayHi = function() {
    console.log('Hello, Im ' + this.name);
}


function Student(name) {
    this.name = name;
    this.myCourses = [];
}

// Создаем ссьілку на проторип
Student.prototype = Object.create(new Person()); // функция Object.create требует обьект, поєтому мьі создаем єкземпляр new Animal()

Student.prototype.getTheCourse = function(courseName) {
    this.myCourses = this.myCourses.concat(courseName);
}

Student.prototype.listTheCourses = function() {
    console.log("I have such courses: " + this.myCourses);
}

var Ivan = new Student('Ivan');
Ivan.sayHi(); // Hello, Im Ivan
Ivan.getTheCourse('JS Advanced');
Ivan.listTheCourses(); // I have such courses: JS Advanced



// ----------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log('Hello, Im ' + this.name);
    }
}

class Student extends Person {
    constructor(name) {
        super(name);
        this.myCourses = [];
    }
    sayHi() {
        super.sayHi();
        console.log('Whatsupp');
    }
    getTheCourse(courseName) {
        this.myCourses = this.myCourses.concat(courseName);
    }
    listTheCourses() {
        console.log("I have such courses: " + this.myCourses);
    }
}

var Ivan = new Student('Ivan');
Ivan.sayHi(); // Hello, Im Ivan
Ivan.getTheCourse('JS Advanced');
Ivan.listTheCourses(); // I have such courses: JS Advanced
