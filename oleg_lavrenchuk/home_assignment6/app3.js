var body = document.body;
class UIcomponent {
    constructor(tagName) {
        this.tagName = tagName;
    }
    setAttribute() {
        this.attributes = [{ name: 'id', value: 1 }, { name: 'class', value: 'myDiv' }];
    }
    setContent(con) {
        this.content = con;
    }
    render() {
        this.el = document.createElement(this.tagName);
        if (this.attributes != undefined) {
            for (var i = 0; i < this.attributes.length; i++) {
                this.el.setAttribute(this.attributes[i].name, this.attributes[i].value);
            }
        }
        body.appendChild(this.el).textContent = this.content;
    }
};

class Button extends UIcomponent {
    clickMe() {
        console.log("I'm clicked");
    }
};
var firstDiv = new UIcomponent('div');
firstDiv.setAttribute();
firstDiv.setContent('hello');
firstDiv.render();

var secondDiv = new Button('div');
secondDiv.render();
secondDiv.clickMe();