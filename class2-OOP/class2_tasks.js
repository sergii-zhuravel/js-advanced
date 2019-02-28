function Student(id, name, courses) {
  this.id = id;
  var name = name;
  this.courses = courses;
  this.getCourses = function() {
    // JS Base -> JS Advanced -> JS Professional
    console.log(this.courses.join(' -> '));
  }
  this.addCourse = function(course) {
    this.courses.push(course);
  }
  this.getName = function() {
    return name.toUpperCase();
  }
}
var student1 = new Student(1, "Kolya", ["JS Base", "JS Advanced", "JS Professional"]);
console.log(student1.getName())
student1.getCourses();
var student2 = new Student(1, "Olya", ["JS Base"]);
student2.getCourses();

// {
//   id: 1,
//   name: "Kolya",
//   courses: ["JS Base", "JS Advanced", "JS Professional"],
//   getCourses: function() {
//       // JS Base -> JS Advanced -> JS Professional
//       console.log(this.courses.join(' -> '));
//   }
// }


// var student1 = {
//   id: 1,
//   name: "Kolya",
//   courses: ["JS Base", "JS Advanced", "JS Professional"],
//   getCourses: function() {
//       // JS Base -> JS Advanced -> JS Professional
//       console.log(this.courses.join(' -> '));
//   }
// }

// student1.getCourses();