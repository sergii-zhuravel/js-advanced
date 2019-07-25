/*
Создать UIComponent ES6 Class
Конструктор класса принимает - имя єлемента (имя тега) и сохраняет его в поле класса

(можно добавить параметрьі - атрибутьі и контент)
Добавить методьі:
 - setAttribute() -  добавляет в поле (массив) attributes обьект типа {name: 'id', value: 1}
 - setContent() - добавляет в поле content текстовьій контент (строку)

Метод render(parent) - принимает HTML єлемент в которьій вьіводит созданньій єлемент
(єлемент нужно создать используя имя єлемента, атрибутьі  и текстовьій контент).


Создать класс Button которьій расширяет класс UIComponent и добавляет Метод

clickMe() {
  console.log("I'm clicked")
}

-------------
Для тестирования классов:
создать єкземпляр класса  Button и вьізвать у него методьі render и clickMe
*/

class UIComponent{
constructor(name){
    this.name = name;
    this.attributes = [];
    this.content = null; 
}
setAttribute(attr){
    this.attributes.push(attr)
    return this.attributes;
}

setContent(text){
    this.content = text;
    return this.content;
}
render(elem){
    let newElem = document.createElement(this.name);
    console.log(newElem);
    // this.attributes.forEach(function(item, i, arr) {
    //     console.log( i + ": " + item + " (массив:" + arr + ")" );
    //   });
    this.attributes.forEach(attr => {
        newElem.setAttribute(attr.name, attr.value)
    })  
    
    let node = document.createTextNode(this.content)
    let parentElem = document.getElementsByTagName(elem)[0];
    newElem.appendChild(node)
    parentElem.appendChild(newElem);
    console.log('new');
    
//    return newElem; //не  обязательно 

}
}

