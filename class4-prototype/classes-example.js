class Widget {
  constructor(name) {
    this.name = name
  }
  show() {
    console.log("I can display my content. My name is: %s", this.name)
  }
}

class Button extends Widget {
  handleClick() {
    console.log("I can be clicked")
  }
}

var b = new Button()
b.handleClick()
b.show()

console.log(b instanceof Button)
console.log(b instanceof Widget)
console.log(b instanceof Object)
console.log(b instanceof Array)
