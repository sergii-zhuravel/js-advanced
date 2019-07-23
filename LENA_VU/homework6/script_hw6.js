// ------------------------
// Задача 6.1
// ------------------------
//Получаем значие value в Placeholder
var inputValue=document.querySelector("#todo-input").value;


//Получаю первый li  первым способом (Это deep clone??)
var liEl= document.getElementsByClassName("todo-item")[0];

var liElement = document.querySelector(".todo-item"); //Получаю первый li вторым способом



liEl.innerHTML="hi"; // Меняю содержимое li 1спобом
liElement.innerHTML="hello" // Не поменяется на странице. Почему?

// Меняю содержимое li 2 способом
document.body.children[0].lastElementChild.children[0].innerHTML=inputValue;






// ------------------------
// Задача 6.3
// ------------------------


class UIComponent{
    constructor(tag_name){
        this.tag_name= tag_name;
        this.attributes=[];
        this.content="";
    }

    setAttributes(name,value){
        this.attributes.push({name:name,value:value});
    }

    setContent(content){
        this.content=content;
    }

    render(parent){
        //Создаем тег
        var element=document.createElement(this.tag_name);
        //Создаем текст
        var text_content=document.createTextNode(this.content);
      //Добавляем внутрь тегу текст
        element.appendChild(text_content)
        //Добавляем на страницу к родителю
        parent.appendChild(element);
    }
}

class Button extends UIComponent{
    clickMe() {
        console.log("I'm clicked")
      }
}

const button = new Button("Button");
button.setAttributes('id','button');
button.setContent("Click Me");
button.clickMe();

// body будет родителем , к нему добавляем нашу кнопку 
var body=document.body;
button.render(body);



