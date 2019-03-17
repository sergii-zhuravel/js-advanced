class UIComponent {
  constructor(name) {
    this.name = name;
  }

  setAttribute(attribute) {
    var attributes = new Array();
    attributes.push(attribute);
  }
  setContent(content) {
    var content = content;
  }

  render(element) {
    console.log(element);
  }
}
class Button extends UIComponent {
  clickMe() {
    console.log("I'm clicked");
  }
}

let but = new Button();
but.render(but);
but.clickMe();
let comp = new UIComponent("hello");
comp.setAttribute("color");
comp.setContent("hello");
console.log(comp);
