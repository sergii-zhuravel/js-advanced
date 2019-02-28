Link to the example:
https://www.typescriptlang.org/play/#src=class%20Person%20%7B%0D%0A%20%20%20%20name%3A%20string%3B%0D%0A%20%20%20%20constructor(name%3A%20string)%20%7B%0D%0A%20%20%20%20%20%20%20%20this.name%20%3D%20name%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20greet()%20%7B%0D%0A%20%20%20%20%20%20%20%20return%20%22Hello%2C%20I'm%20%22%20%2B%20this.name%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Aclass%20Student%20extends%20Person%20%7B%0D%0A%20%20%20%20greet()%20%7B%0D%0A%20%20%20%20%20%20%20%20return%20super.greet()%20%2B%20%22%20I'm%20a%20student%22%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Aclass%20SilentStudent%20extends%20Person%20%7B%0D%0A%20%20%20%20greet()%20%7B%0D%0A%20%20%20%20%20%20%20%20return%20super.greet()%20%2B%20%22%20I'm%20a%20silent%20student%22%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Aclass%20Program%20%7B%0D%0A%20%20%20%20logGreatingFromStudent(student%3A%20Person)%20%7B%0D%0A%20%20%20%20%20%20%20%20alert(student.greet())%3B%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0A%0D%0Alet%20student%20%3D%20new%20Student(%22Nick%22)%3B%0D%0Alet%20silentStudent%20%3D%20new%20SilentStudent(%22Vasya%22)%3B%0D%0Alet%20myProgram%20%3D%20new%20Program()%3B%0D%0A%0D%0A%2F%2F%20myProgram.logGreatingFromStudent(student)%3B%0D%0A%2F%2F%20myProgram.logGreatingFromStudent(silentStudent)%3B%0D%0A%0D%0Alet%20button%20%3D%20document.createElement('button')%3B%0D%0Abutton.textContent%20%3D%20%22Say%20Hello%22%3B%0D%0Abutton.onclick%20%3D%20function()%20%7B%0D%0A%20%20%20%20myProgram.logGreatingFromStudent(student)%3B%0D%0A%7D%0D%0A%0D%0Adocument.body.appendChild(button)%3B%0D%0A%0D%0Alet%20anotherButton%20%3D%20button.cloneNode(true)%3B%0D%0AanotherButton.addEventListener('click'%2C%20e%20%3D%3E%20myProgram.logGreatingFromStudent(silentStudent))%0D%0Adocument.body.appendChild(anotherButton)%3B


code ...
```
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return "Hello, I'm " + this.name;
    }
}

class Student extends Person {
    greet() {
        return super.greet() + " I'm a student";
    }
}

class SilentStudent extends Person {
    greet() {
        return super.greet() + " I'm a silent student";
    }
}

class Program {
    logGreatingFromStudent(student: Person) {
        alert(student.greet());
    }
}

let student = new Student("Nick");
let silentStudent = new SilentStudent("Vasya");
let myProgram = new Program();

// myProgram.logGreatingFromStudent(student);
// myProgram.logGreatingFromStudent(silentStudent);

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    myProgram.logGreatingFromStudent(student);
}

document.body.appendChild(button);

let anotherButton = button.cloneNode(true);
anotherButton.addEventListener('click', e => myProgram.logGreatingFromStudent(silentStudent))
document.body.appendChild(anotherButton);
```
