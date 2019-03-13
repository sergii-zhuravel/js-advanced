class UIComponent{
    constructor(tagname){
    this.tag = tagname;
    this.element = document.createElement(this.tag);
    this.attributes = [null, null];
    }

    setaAttribute = function(obj){
        this.attributes.push(obj.name, obj.value);
        
    }
    setContent = function(word){
        this.element.textContent = word;
    }
    render(parent){
        this.parent = document.querySelector(parent);
        console.log(this.parent.tagName);
        if(this.attributes.length == 0)
        this.parent.appendChild(this.element); 
        else{
        this.element.setAttribute(this.attributes[0], this.attributes[1]);
        this.parent.appendChild(this.element); 
        }
        
    }
    
}
var object = {
    setName: function(){
        this.name = prompt('Enter the name of the attribute');
        return this.name;
    },
    setValue: function(){
        this.value = prompt('Enter the value of the attribute');
        return this.value;
    }
}
class Button extends UIComponent{
    clickMe = function() {
        console.log("I'm clicked")
      }
}
var tagname = prompt('Enter the name of the tag you want to add');
tagname.toLowerCase();
var newTag = new Button(tagname);
object.setName();
object.setValue();
newTag.setaAttribute(object);
var word = prompt('Enter the content of the tag');
newTag.setContent(word);
var parent = prompt('Enter the class name or the id name of the element in which you want to add a new element');
newTag.render(parent);