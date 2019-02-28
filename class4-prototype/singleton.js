// Singleton on wiki https://uk.wikipedia.org/wiki/Одинак_(шаблон_проектування)

function Universe() {
  var instance = this
  this.start_time = 0
  this.bang = "Big"
}

// function Universe() {
//   var instance = this
//   this.start_time = 0
//   this.bang = "Big"
//   Universe = function () {
//       return instance
//   }
// }

Universe.prototype.past = "Something good"

var universe = new Universe()
Universe.prototype.future = "Something bad"

console.log(universe.start_time)
console.log(universe.bang)
console.log(universe.past)
console.log(universe.future)