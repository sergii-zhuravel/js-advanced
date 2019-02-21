function Student(id, name, courses) {
  this.id = id;
  var name = name;
  this.courses = courses;
  this.addCourse = function(course) {
    this.courses.push(course);
  };
  this.getName = function() {
    return name.toUpperCase();
  };
}

var student1 = new Student(1, "Petya", ["JS Basic"]);
student1.addCourse("JS Advanced");
console.log(student1.courses);
console.log(student1.getName());
