/*var a = {
    id : 1,
    name : "Kolya",
    course : "JSCourse"
}
var b = {
    id : 1,
    age : "40",
    name : "Victor",
    doctor : "House"
}
абстрактно а - относиться к class student
            b - class patient;
            student и patient єто class person
var student = ;

var patient = ;

var person = ;*/
function Student(id, name, courses) {
  var id = id; //приватное поле, принцип инкапсюляции
  this.name = name; //публичное поле
  this.courses = courses;
  this.getCourses = function() {
    console.log(this.courses.join(" -> "));
  };
  this.addCourse = function(courses) {
    this.courses.push(courses);
  };
  this.getId = function() {
    //функция для возврата ID чтобьі не напрямую обращаться к ID
    return id;
  };
}
var student1 = new Student(3, "Kolya", [
  "JSBase",
  "JSAdvanced",
  "JSProfessional"
]);
student1.getCourses();
var student2 = new Student(3, "Olya", ["JSBase", "JSProfessional", "HTML/CSS"]);
student2.getCourses();
console.log(student1.getId()); //обращение к ID не меняя его значения
//ПРИМЕР ДВА
function CarWithManulTransmission (wheels, color){
    this.wheels = wheels || 4;
    this.color = color || 'white';
    this.engineOn = false;
    this.transmission = 0;
    this.setTransmission = function(n) {
      this.transmission = n;
    };
    this.switchEngine = function() {
      if (this.engineOn) {
        console.log("Turning engine off");
        this.engineOn = false;
      } else {
        console.log("Turning engine on");
        this.engineOn = true;
      }
    };
    this.drive = function() {
      this.switchEngine();
      this.setTransmission(1);
      console.log("Im driving. I'm a " + this.color + " car");
    }
  }

  var ford = new CarWithManulTransmission(undefined, 'red');
  ford.drive();

