// // 1. Угадай число

// Написать JavaScript программу, которая генерирует число от 1 до 10, 
// затем запрашивает число от 1 до 10 от пользователя.
// Если число совпадает - выдать сообщение "Угадал", 
// если не совпадает - выдать сообщение "Повезет в следующий раз" и показать загаданное число.





while (true) {
    var random = Math.ceil(Math.random()*10);
    var userNumber = prompt('Введи число от 1 - 10');

    if (userNumber === "" || userNumber === null || isNaN(userNumber) || userNumber > 10 || userNumber < 1) {
        continue;
        var userNumber = prompt('Введи число от 1 - 10');
    }

    if(random == userNumber){
        alert ('Угадал');
    } else {
        alert('Повезет в слудующий раз');
        alert ('Загаданное число - ' + random);
    }

}