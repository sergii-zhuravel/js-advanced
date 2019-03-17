class UIComponent {
  constructor(tagname) {
    this.tagName = tagname;
    this.attributes = [];
    this.content = "";
  }
  setAttribute(name, value) {
    var obj = {
      name: name,
      value: value
    };
    this.attributes.push(obj);
  }
  setContent(textContent) {
    this.content += textContent;
  }
  render(parent) {
    var elem = document.createElement(this.tagName);
    this.attributes.forEach(function(item, i, arr) {
      elem.setAttribute(item.name, item.value);
    });
    elem.textContent = this.content;
    parent.appendChild(elem);
  }
}

var body = document.body;
var txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum, consectetur aliquam ratione incidunt, atque tempora veniam facere mollitia ducimus sapiente nulla? At consequuntur et adipisci ea provident sed velit.";

var div1 = new UIComponent("div");
div1.setAttribute("id", "divId");
div1.setAttribute("class", "divClass");
div1.setAttribute("style", "background-color: lightblue;");
div1.setContent(txt);
div1.render(body);

class Button extends UIComponent {
  clickMe() {
    console.log("I'm clicked");
  }
}

var btn = new Button("button");
btn.setAttribute("id", "button");
btn.setAttribute("class", "button");
btn.setAttribute("style", "border:3px solid green");
btn.setContent("Click me");
btn.render(body);
btn.clickMe();
