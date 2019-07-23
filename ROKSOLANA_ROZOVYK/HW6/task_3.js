class UIComponent
{
    constructor(tag)
    {
        this.tag = tag;
        this.attributes = [];
        this.content = "";
    }

    setAttribute(atr_name, value)
    {
       let obj = {
           name: atr_name,
           value: value
       }
       this.attributes.push(obj);
       return;
    }

    setContent(content)
    {
       this.content = content;
    }

    render(parent)
    {
        let new_elem = document.createElement(this.tag);
        new_elem.setAttribute(this.attributes[0]['name'], this.attributes[0]['value']);
        let elem_content = document.createTextNode(this.content);
        
        new_elem.appendChild(elem_content);
        parent.appendChild(new_elem);
    }
}

class Button extends UIComponent
{
    clickMe() 
    {
        console.log("I'm clicked");
    }
}

let btn = new Button("button");
btn.setAttribute("id", "test_button");
btn.setContent("Click me!");
btn.clickMe();

let prnt = document.getElementById("task_field");
btn.render(prnt);


