
// Получить число
// Вывести на консоль 


var user = prompt('Введи число');

if (user % 2){
    console.log(' Не Четнное');
} else if (isNaN(user)) {
    console.log('необходимо ввести число');
}  else {
    console.log('Четное');
}
