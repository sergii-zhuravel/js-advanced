//bind

let person = {
    firstName: "John",
    greet: function(pers) {
       console.log(this.firstName);
    }
};
  
setTimeout(person.greet.bind(person), 1000);

//call

let robot = {
    model: 'R2D2',
    task: 'fixing',
    target1: 'spaceship',
    target2: 'engine'
}

function doTask(a, b, c)
{
    console.log(this[a] + ' is ' + this[b] + ' the ' + this[c]);
}

doTask.call(robot, 'model', 'task', 'target1');
doTask.call(robot, 'model', 'task', 'target2');

//apply

var scores = [90, 88, 76, 99];

console.log("The max score is " + Math.max.apply(null, scores));
