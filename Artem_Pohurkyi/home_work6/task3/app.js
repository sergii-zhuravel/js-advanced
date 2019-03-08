class UIComponent {
  constructor(tag, attr1, attr2, content) {
    this.tagName = document.createElement(tag);
    this.attribute1 = this.tagName.setAttribute("id", attr1);
    this.attribute2 = this.tagName.setAttribute("style", attr2);
    this.tagName.textContent = content;
  }
  render(parent) {
    document.body.appendChild(parent);
    parent.appendChild(this.tagName);
  }
}
class Button extends UIComponent {
  clickMe() {
    console.log("I'm clicked");
  }
}

var div = document.createElement("div");
var p = document.createElement("p");
var component = new UIComponent(
  "span",
  "component1",
  "color: red;",
  "Hello, ITEA!"
);
component.render(div);
var test = new Button();
test.render(p);
test.clickMe();
