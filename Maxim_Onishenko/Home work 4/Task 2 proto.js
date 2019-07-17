
/*Задача 4.2
------------------------
1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
2) Создать туже самую цепочку насследования но с помощью ES6 классов
*/
function Animal(limbs,alive,sociable, habitat, age, health){
    this.limbs = limbs;
    this.alive = alive;
    this.sociable = sociable;
    this.habitat = habitat;
    this.age = age;
    this.health = health;
};
// Первый уровень наследования. ??
Animal.prototype = {constructor: Animal};
// Запишу всего пару методов
Animal.prototype.getLimbs = function(){return this.limbs};
Animal.prototype.isAlive = function(){return this.alive};
Animal.prototype.toDie = function(){this.alive = false};

function Bird(feathersColor,migrate, canSweem, maxFlySpeed,canFly,canRepeat){
    this.feathersColor =feathersColor;
    this.migrate = migrate;
    this.canSweem = canSweem; 
    this.maxFlySpeed = maxFlySpeed;
    this.canFly = canFly;
    this.canRepeat = canRepeat;
}
// Что будет если наследоваться от функции конструктора?
// Bird.prototype = Animal;
// Второй уровень наследования
Bird.prototype = Object.create(new Animal());

Bird.prototype.getFeathersColor = function(){return this.feathersColor};
Bird.prototype.setFeathersColor = function(color){this.feathersColor = color};
Bird.prototype.isAbleSweem = function(){return this.canSweem};

function Mammal(maxAge, bodyTemperature, herbivore, brainSize, sex){
    this.maxAge = maxAge;
    this.bodyTemperature = bodyTemperature;
    this.herbivore = herbivore; 
    this.brainSize = brainSize;
    this.sex = sex;
}
// Второй уровень наследования
Mammal.prototype = Object.create(new Animal(4));// я передал только значение limbs = 4. В дальнейшем на на строке 67 я проверю prototype chain.

Mammal.prototype.getMaxAge =function(){return this.maxAge};
Mammal.prototype.getBodyTemperature =function(){return this.bodyTemperature};
Mammal.prototype.isHerbivore =function(){return this.herbivore};

function Cat(breed, hairColor, cute, wild){
    this.breed =breed ;
    this.hairColor = hairColor;
    this.cute = cute;
    this.wild = wild;
}
// Третий уровень наследования  
Cat.prototype = Object.create(new Mammal());
Cat.prototype.getBreed = function(){return this.breed};
Cat.prototype.getHairColor = function(){return this.hairColor};
Cat.prototype.isCute = function(){return this.cute};

//Проверка
rizhik = new Cat('нет породы','рыжий',true,false);
let chainTest =rizhik.getLimbs();
console.log(chainTest)



