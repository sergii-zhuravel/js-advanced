/*Задача 4.2
------------------------
1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
2) Создать туже самую цепочку насследования но с помощью ES6 классов
*/

// Первый уровень
class Animal {
    constructor(limbs, alive, sociable, habitat, age, health) {
        this.limbs = limbs;
        this.alive = alive;
        this.sociable = sociable;
        this.habitat = habitat;
        this.age = age;
        this.health = health ? health:100;
    }
    // Запишу всего пару методов
    getLimbs() { return this.limbs; }
    isAlive() { return this.alive; }
    toDie() { this.alive = false; }
    getHealth() { return this.health}
};
// Второй уровень(дополнительный)
class Bird extends Animal{
    constructor(feathersColor, migrate, canSweem, maxFlySpeed, canFly, canRepeat) {
        super(2,true,true,'sky',0,100)
        this.feathersColor = feathersColor;
        this.migrate= migrate;
        this.canSweem =canSweem;
        this.maxFlySpeed = maxFlySpeed;
        this.canFly = canFly;
        this.canRepeat =canRepeat;
    }
    getFeathersColor() {
        return this.feathersColor;
    }
    setFeathersColor(color) {
        this.feathersColor = color;
    }
    isAbleSweem() {
        return this
            .canSweem;
    }
}

// Второй уровень
class Mammal extends Animal{
    constructor(maxAge, bodyTemperature, herbivore, brainSize, sex){
    super(4,true,true,'mixed',0,100)
    this.maxAge = maxAge;
    this.bodyTemperature = bodyTemperature;
    this.herbivore = herbivore; 
    this.brainSize = brainSize;
    this.sex = sex;
    }
    getMaxAge(){return this.maxAge};
    getBodyTemperature(){return this.bodyTemperature};
    isHerbivore(){return this.herbivore};
};
// Третий уровень
// Когда заполнял super() конструкторы понял свою ошибку в проэктировании абстракций.
class Cat extends Mammal{
    constructor(breed, hairColor, cute, wild) {
        super(12,34,false,70,'male')
        this.breed = breed;
        this.hairColor = hairColor;
        this.cute = cute;
        this.wild = wild;
    }
    getBreed() {
        return this.breed;
    }
    getHairColor() { return this.hairColor; }
    isCute() { return this.cute; }
}


rizhik = new Cat('без породы','рыжий',true,false);
// Проверяем: 
console.log(rizhik.getHealth()) // мы получили строку 13 класса Animal "100". Наследование работает.