function Student(id, name, courses) {
    this.id = id;
    var name = name;
    this.courses = courses;
    this.getCourses = function() {
        console.log(this.courses.join(' -> '));
    };
    this.addCourse = function(course) {
        this.courses.push(course);
    }
    this.getName = function () {
        return name.toUpperCase();
    }
}

var student1 = new Student(1, "Kolya", ["JS Base", "JS Advance", "JS Professional"]);
console.log(student1.getName());
student1.getCourses();

var student2 = new Student(2, "Olya", ["JS Base"]);
student2.getCourses();