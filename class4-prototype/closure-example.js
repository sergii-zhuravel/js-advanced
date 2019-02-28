function makeCounter() {
  var c = 1
  return function() {
    return c++
  }
}

var counter = makeCounter()


console.log(typeof counter)

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())