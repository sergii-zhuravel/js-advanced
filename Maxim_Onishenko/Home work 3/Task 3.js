// Пример  первый call 
var car = {
    wheels: 4,
    engine: 'electric',
    type: 'cabrio',
    maxSpeed: 320,
    capacity: 5
}
function showTwoProterties(propertyOne, propertyTwo) {
    alert(this[propertyOne] + " " + this[propertyTwo])
}
showTwoProterties.call(car, 'engine', 'type')

// Пример второй call: Одалживание метода
function joinArgs() {
    var join = [].join;

    var argStr = join.call(arguments, '-');

    alert(argStr);
}
printArgs(1, 2, 3, 4);

// Пример apply

// Пример bind
ladyOne = {
    name: "Vika",
    sex: "female",
    age: 21,
    phoneNum: "066144097",
    alertPhoneNum: function () {
        alert("Phone number is " + this.phoneNum)

    }
};
bindedPhone = ladyOne.alertPhoneNum.bind(ladyOne)();
ladyOne.phoneNum = null;

setTimeout(bindedPhone, 100);


Array.from(pseaudoArray)